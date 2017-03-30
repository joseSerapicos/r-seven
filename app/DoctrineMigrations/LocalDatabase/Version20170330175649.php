<?php

namespace Application\DoctrineMigrations;

use Doctrine\DBAL\Migrations\AbstractMigration;
use Doctrine\DBAL\Schema\Schema;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
class Version20170330175649 extends AbstractMigration
{
    /**
     * @param Schema $schema
     */
    public function up(Schema $schema)
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->abortIf($this->connection->getDatabasePlatform()->getName() != 'mysql', 'Migration can only be executed safely on \'mysql\'.');

        $this->addSql('CREATE TABLE supplierCurrentAccount (id INT UNSIGNED AUTO_INCREMENT NOT NULL COMMENT \'Column row identifier\', fk_supplier INT UNSIGNED NOT NULL COMMENT \'Column row identifier\', fk_store INT UNSIGNED NOT NULL COMMENT \'Column row identifier\', number VARCHAR(24) NOT NULL COMMENT \'Number/Code\', description VARCHAR(256) DEFAULT NULL COMMENT \'Description\', date DATE NOT NULL COMMENT \'Date of document\', dueDate DATE DEFAULT NULL COMMENT \'Due date of document\', storeLegalName VARCHAR(64) NOT NULL COMMENT \'Static store legal name\', storeTaxNumber VARCHAR(12) NOT NULL COMMENT \'Static store tax number\', storeStreet1 VARCHAR(256) NOT NULL COMMENT \'Static store street line 1\', storeStreet2 VARCHAR(256) DEFAULT NULL COMMENT \'Static store street line 2\', storeCity VARCHAR(64) NOT NULL COMMENT \'Static store city\', storePostCode VARCHAR(12) NOT NULL COMMENT \'Static store post code\', storeRegion VARCHAR(64) DEFAULT NULL COMMENT \'Static store region\', storeCountry VARCHAR(64) NOT NULL COMMENT \'Static store country\', entityLegalName VARCHAR(128) DEFAULT NULL COMMENT \'Legal Name\', entityTaxNumber VARCHAR(16) DEFAULT NULL COMMENT \'Tax code\', entityStreet1 VARCHAR(256) NOT NULL COMMENT \'Static entity street line 1\', entityStreet2 VARCHAR(256) DEFAULT NULL COMMENT \'Static entity street line 2\', entityCity VARCHAR(64) NOT NULL COMMENT \'Static entity city\', entityPostCode VARCHAR(12) NOT NULL COMMENT \'Static entity post code\', entityRegion VARCHAR(64) DEFAULT NULL COMMENT \'Static entity region\', entityCountry VARCHAR(64) NOT NULL COMMENT \'Static entity country\', total NUMERIC(10, 2) DEFAULT \'0\' NOT NULL COMMENT \'Total\', totalVat NUMERIC(10, 2) DEFAULT \'0\' NOT NULL COMMENT \'Total VAT\', insertTime DATETIME NOT NULL COMMENT \'Date and time insertion\', insertUser VARCHAR(32) NOT NULL COMMENT \'User insertion\', isEnabled TINYINT(1) DEFAULT \'0\' NOT NULL COMMENT \'Determines whether the registry is enabled\', fk_supplierDocumentType INT UNSIGNED NOT NULL COMMENT \'Column row identifier\', UNIQUE INDEX UNIQ_3C98EAE4BF396750 (id), INDEX IDX_3C98EAE48B7CE372 (fk_supplierDocumentType), INDEX IDX_3C98EAE4A9022FA0 (fk_supplier), INDEX IDX_3C98EAE43EBA7B02 (fk_store), UNIQUE INDEX unq_supplierCurrentAccount_number (fk_supplierDocumentType, number), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8 COLLATE utf8_unicode_ci ENGINE = InnoDB');
        $this->addSql('CREATE TABLE entityCurrentAccount (id INT UNSIGNED AUTO_INCREMENT NOT NULL COMMENT \'Column row identifier\', fk_entity INT UNSIGNED NOT NULL COMMENT \'Column row identifier\', fk_store INT UNSIGNED NOT NULL COMMENT \'Column row identifier\', number VARCHAR(24) NOT NULL COMMENT \'Number/Code\', description VARCHAR(256) DEFAULT NULL COMMENT \'Description\', date DATE NOT NULL COMMENT \'Date of document\', dueDate DATE DEFAULT NULL COMMENT \'Due date of document\', storeLegalName VARCHAR(64) NOT NULL COMMENT \'Static store legal name\', storeTaxNumber VARCHAR(12) NOT NULL COMMENT \'Static store tax number\', storeStreet1 VARCHAR(256) NOT NULL COMMENT \'Static store street line 1\', storeStreet2 VARCHAR(256) DEFAULT NULL COMMENT \'Static store street line 2\', storeCity VARCHAR(64) NOT NULL COMMENT \'Static store city\', storePostCode VARCHAR(12) NOT NULL COMMENT \'Static store post code\', storeRegion VARCHAR(64) DEFAULT NULL COMMENT \'Static store region\', storeCountry VARCHAR(64) NOT NULL COMMENT \'Static store country\', entityLegalName VARCHAR(128) DEFAULT NULL COMMENT \'Legal Name\', entityTaxNumber VARCHAR(16) DEFAULT NULL COMMENT \'Tax code\', entityStreet1 VARCHAR(256) NOT NULL COMMENT \'Static entity street line 1\', entityStreet2 VARCHAR(256) DEFAULT NULL COMMENT \'Static entity street line 2\', entityCity VARCHAR(64) NOT NULL COMMENT \'Static entity city\', entityPostCode VARCHAR(12) NOT NULL COMMENT \'Static entity post code\', entityRegion VARCHAR(64) DEFAULT NULL COMMENT \'Static entity region\', entityCountry VARCHAR(64) NOT NULL COMMENT \'Static entity country\', total NUMERIC(10, 2) DEFAULT \'0\' NOT NULL COMMENT \'Total\', totalVat NUMERIC(10, 2) DEFAULT \'0\' NOT NULL COMMENT \'Total VAT\', insertTime DATETIME NOT NULL COMMENT \'Date and time insertion\', insertUser VARCHAR(32) NOT NULL COMMENT \'User insertion\', isEnabled TINYINT(1) DEFAULT \'0\' NOT NULL COMMENT \'Determines whether the registry is enabled\', fk_entityDocumentType INT UNSIGNED NOT NULL COMMENT \'Column row identifier\', UNIQUE INDEX UNIQ_FEEC62FBF396750 (id), INDEX IDX_FEEC62FC5336D7C (fk_entityDocumentType), INDEX IDX_FEEC62F2E862CF8 (fk_entity), INDEX IDX_FEEC62F3EBA7B02 (fk_store), UNIQUE INDEX unq_entityCurrentAccount_number (fk_entityDocumentType, number), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8 COLLATE utf8_unicode_ci ENGINE = InnoDB');
        $this->addSql('ALTER TABLE supplierCurrentAccount ADD CONSTRAINT FK_3C98EAE48B7CE372 FOREIGN KEY (fk_supplierDocumentType) REFERENCES supplierDocumentType (id) ON DELETE RESTRICT');
        $this->addSql('ALTER TABLE supplierCurrentAccount ADD CONSTRAINT FK_3C98EAE4A9022FA0 FOREIGN KEY (fk_supplier) REFERENCES supplier (id) ON DELETE RESTRICT');
        $this->addSql('ALTER TABLE supplierCurrentAccount ADD CONSTRAINT FK_3C98EAE43EBA7B02 FOREIGN KEY (fk_store) REFERENCES store (id) ON DELETE RESTRICT');
        $this->addSql('ALTER TABLE entityCurrentAccount ADD CONSTRAINT FK_FEEC62FC5336D7C FOREIGN KEY (fk_entityDocumentType) REFERENCES entityDocumentType (id) ON DELETE RESTRICT');
        $this->addSql('ALTER TABLE entityCurrentAccount ADD CONSTRAINT FK_FEEC62F2E862CF8 FOREIGN KEY (fk_entity) REFERENCES entity (id) ON DELETE RESTRICT');
        $this->addSql('ALTER TABLE entityCurrentAccount ADD CONSTRAINT FK_FEEC62F3EBA7B02 FOREIGN KEY (fk_store) REFERENCES store (id) ON DELETE RESTRICT');
    }

    /**
     * @param Schema $schema
     */
    public function down(Schema $schema)
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->abortIf($this->connection->getDatabasePlatform()->getName() != 'mysql', 'Migration can only be executed safely on \'mysql\'.');

        $this->addSql('DROP TABLE supplierCurrentAccount');
        $this->addSql('DROP TABLE entityCurrentAccount');
    }
}
