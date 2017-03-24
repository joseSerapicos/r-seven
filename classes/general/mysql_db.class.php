<?php
/* FILE_INFO \___________________________________________________
|  
|  NAME: mysql_db.class.php
|  PATH: classes
|  DESCRIPTION: Classe para conexao e interaccao com base de dados mysql
|
|  AUTHOR: Jose A. C. Serapicos
|  CREATE DATE: 06SET2013
|  MODIFICATION DATE: 06SET2013
|____________________________________________________________*/


class mysql_db
{
	private $host;
	private $name;
	private $username;
	private $password;
	
	private $connection;
	
	private $error;
	private $db_error_log_obj;
	
	//////////////////
	// Constructor //
	////////////////
	
	// Default //
	public function __construct()
	{
		$args		= func_get_args();
        $num_args	= func_num_args();
        $method		= "__construct".$num_args;
		
		if(method_exists($this,$method))
			call_user_func_array(array($this,$method),$args);
		else
			die("CONSTRUCT '".$method."' NOT DEFINED!");
	}
	
	// 3 Args //
	public function __construct3($var_host, $var_username, $var_password)
	{
    	$this->host			= $var_host;
		$this->name			= "";
		$this->username		= $var_username;
		$this->password		= $var_password;
		
		$this->connection	= false;
		
		$this->error		= false;
		$this->db_error_log_obj = false;
	}
	
	// 4 Args //
	public function __construct4($var_host, $var_name, $var_username, $var_password)
	{
    	$this->host			= $var_host;
		$this->name			= $var_name;
		$this->username		= $var_username;
		$this->password		= $var_password;
		
		$this->connection	= false;
		
		$this->error		= false;
		$this->db_error_log_obj = false;
	}


	//////////////////
	// Set methods //
	////////////////
	
	// Atribui nome da base de dados //
	public function set_name($var_name)
	{
		$this->name = $var_name;
	}
	
	// Atribui e regista erro da base de dados //
	private function set_error($var_sql)
	{
		$this->error = mysql_error($this->connection);
		
		// Regista erro na base de dados
		if($this->db_error_log_obj)
		{
			$sql = "INSERT INTO development_db_error_log
						(development_db_error_log.sql_error,
						development_db_error_log.sql,
						development_db_error_log.db_host,
						development_db_error_log.db_name,
						development_db_error_log.db_username)
					VALUES (
						'".addslashes($this->error)."',
						'".addslashes($var_sql)."',
						'".addslashes($this->host)."',
						'".addslashes($this->name)."',
						'".addslashes($this->username)."')";
			
			if($this->db_error_log_obj->execute($sql))
				return(true);
			else
				return(false);
		}
		return(true);
	}
	
	// Atribui base de dados para log de erros //
	public function set_db_error_log_obj($var_error_register_db_obj)
	{
		$this->db_error_log_obj = $var_error_register_db_obj;
	}

	
	//////////////////
	// Get methods //
	////////////////
	
	// Retorna erro //
	public function get_error()
	{
		return($this->error);
	}
	
	
	//////////////////
	// All methods //
	////////////////
	
	// Efectua a conexao a base de dados //
	public function connect_db()
	{
		$this->error = false;
		
		if($this->connect_sgdb())
			if($this->select_db())
				return(true);
		
		// Error
		return(false);
	}
		
	// Efectua a conexao ao sgdb //
	public function connect_sgdb()
	{
		$this->error = false;
		
		if($this->connection = mysql_connect($this->host, $this->username, $this->password, true))
			return(true);
		
		// Error
		$this->set_error("Connect to SGDB.");
		return(false);
	}
	
	// Selecciona a base de dados dentro do sgdb //
	public function select_db()
	{
		$this->error = false;
		
		if(@mysql_select_db($this->name, $this->connection))
			return(true);
		
		// Error
		$this->set_error("Connect to data base.");
		return(false);	
	}
	
	// Executa comando na base de dados //
	public function execute($var_sql)
	{
		$this->error = false;
		
		if($rs = mysql_query($var_sql, $this->connection))
			return($rs);

		// Error
		$this->set_error($var_sql);
		return(false);
	}
	
	// Retorna linha do recordset //
	public function get_row($var_rs)
	{
		$this->error = false;
		
		if($var_rs)
			if($row = mysql_fetch_object($var_rs))
				return($row);

		// End Of File (EOF)
		return(false);
	}
	

	// Destructor //
	public function __destruct()
	{
	}
}

?>