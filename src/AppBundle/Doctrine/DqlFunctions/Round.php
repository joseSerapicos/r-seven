<?php

namespace AppBundle\Doctrine\DqlFunctions;

use \Doctrine\ORM\Query\AST\Functions\FunctionNode;
use \Doctrine\ORM\Query\Lexer;

/**
 * Round
 */
class Round extends FunctionNode
{
    /**
     * simpleArithmeticExpression
     *
     * @var mixed
     * @access public
     */
    public $simpleArithmeticExpression;

    /**
     * roundPrecision
     *
     * @var mixed
     * @access public
     */
    public $roundPrecision;


    /**
     * getSql
     *
     * @param \Doctrine\ORM\Query\SqlWalker $sqlWalker
     * @access public
     * @return string
     */
    public function getSql(\Doctrine\ORM\Query\SqlWalker $sqlWalker)
    {
        return 'ROUND(' .
        $sqlWalker->walkSimpleArithmeticExpression($this->simpleArithmeticExpression) .','.
        $sqlWalker->walkStringPrimary($this->roundPrecision) .
        ')';
    }

    /**
     * parse
     *
     * @param \Doctrine\ORM\Query\Parser $parser
     * @access public
     * @return void
     */
    public function parse(\Doctrine\ORM\Query\Parser $parser)
    {
        $parser->match(Lexer::T_IDENTIFIER);
        $parser->match(Lexer::T_OPEN_PARENTHESIS);
        $this->simpleArithmeticExpression = $parser->SimpleArithmeticExpression();
        $parser->match(Lexer::T_COMMA);
        $this->roundPrecision = $parser->ArithmeticExpression();
        if ($this->roundPrecision == null) {
            $this->roundPrecision = 0;
        }
        $parser->match(Lexer::T_CLOSE_PARENTHESIS);
    }
}