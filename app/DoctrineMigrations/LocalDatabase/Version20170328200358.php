<?php

namespace Application\DoctrineMigrations;

use Doctrine\DBAL\Migrations\AbstractMigration;
use Doctrine\DBAL\Schema\Schema;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
class Version20170328200358 extends AbstractMigration
{
    /**
     * @param Schema $schema
     */
    public function up(Schema $schema)
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->abortIf($this->connection->getDatabasePlatform()->getName() != 'mysql', 'Migration can only be executed safely on \'mysql\'.');

        $this->addSql('ALTER TABLE documentSetting DROP FOREIGN KEY FK_1798D7E193F01110');
        $this->addSql('CREATE TABLE clientDocumentType (id INT UNSIGNED AUTO_INCREMENT NOT NULL COMMENT \'Column row identifier\', name VARCHAR(128) NOT NULL COMMENT \'Name\', prefix VARCHAR(8) NOT NULL COMMENT \'Prefix\', operation VARCHAR(16) NOT NULL COMMENT \'Nature of operations\', insertTime DATETIME NOT NULL COMMENT \'Date and time insertion\', insertUser VARCHAR(32) NOT NULL COMMENT \'User insertion\', isEnabled TINYINT(1) DEFAULT \'0\' NOT NULL COMMENT \'Determines whether the registry is enabled\', UNIQUE INDEX UNIQ_F5EA5F34BF396750 (id), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8 COLLATE utf8_unicode_ci ENGINE = InnoDB');
        $this->addSql('CREATE TABLE clientDocumentTypeSetting (id INT UNSIGNED AUTO_INCREMENT NOT NULL COMMENT \'Column row identifier\', fk_store INT UNSIGNED DEFAULT NULL COMMENT \'Column row identifier\', seriesPrefix VARCHAR(8) DEFAULT NULL COMMENT \'Series prefix\', seriesNumber BIGINT UNSIGNED DEFAULT 0 NOT NULL COMMENT \'Series number\', insertTime DATETIME NOT NULL COMMENT \'Date and time insertion\', insertUser VARCHAR(32) NOT NULL COMMENT \'User insertion\', isEnabled TINYINT(1) DEFAULT \'0\' NOT NULL COMMENT \'Determines whether the registry is enabled\', fk_clientDocumentType INT UNSIGNED NOT NULL COMMENT \'Column row identifier\', UNIQUE INDEX UNIQ_22E1838CBF396750 (id), INDEX IDX_22E1838C46421294 (fk_clientDocumentType), INDEX IDX_22E1838C3EBA7B02 (fk_store), UNIQUE INDEX unq_clientDocumentTypeSetting (fk_store, fk_clientDocumentType), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8 COLLATE utf8_unicode_ci ENGINE = InnoDB');
        $this->addSql('CREATE TABLE supplierDocumentType (id INT UNSIGNED AUTO_INCREMENT NOT NULL COMMENT \'Column row identifier\', name VARCHAR(128) NOT NULL COMMENT \'Name\', prefix VARCHAR(8) NOT NULL COMMENT \'Prefix\', operation VARCHAR(16) NOT NULL COMMENT \'Nature of operations\', insertTime DATETIME NOT NULL COMMENT \'Date and time insertion\', insertUser VARCHAR(32) NOT NULL COMMENT \'User insertion\', isEnabled TINYINT(1) DEFAULT \'0\' NOT NULL COMMENT \'Determines whether the registry is enabled\', UNIQUE INDEX UNIQ_2D16D11EBF396750 (id), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8 COLLATE utf8_unicode_ci ENGINE = InnoDB');
        $this->addSql('CREATE TABLE supplierDocumentTypeSetting (id INT UNSIGNED AUTO_INCREMENT NOT NULL COMMENT \'Column row identifier\', fk_store INT UNSIGNED DEFAULT NULL COMMENT \'Column row identifier\', seriesPrefix VARCHAR(8) DEFAULT NULL COMMENT \'Series prefix\', seriesNumber BIGINT UNSIGNED DEFAULT 0 NOT NULL COMMENT \'Series number\', insertTime DATETIME NOT NULL COMMENT \'Date and time insertion\', insertUser VARCHAR(32) NOT NULL COMMENT \'User insertion\', isEnabled TINYINT(1) DEFAULT \'0\' NOT NULL COMMENT \'Determines whether the registry is enabled\', fk_supplierDocumentType INT UNSIGNED NOT NULL COMMENT \'Column row identifier\', UNIQUE INDEX UNIQ_3B2BCDCBF396750 (id), INDEX IDX_3B2BCDC8B7CE372 (fk_supplierDocumentType), INDEX IDX_3B2BCDC3EBA7B02 (fk_store), UNIQUE INDEX unq_supplierDocumentTypeSetting (fk_store, fk_supplierDocumentType), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8 COLLATE utf8_unicode_ci ENGINE = InnoDB');
        $this->addSql('CREATE TABLE entityDocumentType (id INT UNSIGNED AUTO_INCREMENT NOT NULL COMMENT \'Column row identifier\', name VARCHAR(128) NOT NULL COMMENT \'Name\', prefix VARCHAR(8) NOT NULL COMMENT \'Prefix\', operation VARCHAR(16) NOT NULL COMMENT \'Nature of operations\', insertTime DATETIME NOT NULL COMMENT \'Date and time insertion\', insertUser VARCHAR(32) NOT NULL COMMENT \'User insertion\', isEnabled TINYINT(1) DEFAULT \'0\' NOT NULL COMMENT \'Determines whether the registry is enabled\', UNIQUE INDEX UNIQ_769B20DCBF396750 (id), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8 COLLATE utf8_unicode_ci ENGINE = InnoDB');
        $this->addSql('CREATE TABLE entityDocumentTypeSetting (id INT UNSIGNED AUTO_INCREMENT NOT NULL COMMENT \'Column row identifier\', fk_store INT UNSIGNED DEFAULT NULL COMMENT \'Column row identifier\', seriesPrefix VARCHAR(8) DEFAULT NULL COMMENT \'Series prefix\', seriesNumber BIGINT UNSIGNED DEFAULT 0 NOT NULL COMMENT \'Series number\', insertTime DATETIME NOT NULL COMMENT \'Date and time insertion\', insertUser VARCHAR(32) NOT NULL COMMENT \'User insertion\', isEnabled TINYINT(1) DEFAULT \'0\' NOT NULL COMMENT \'Determines whether the registry is enabled\', fk_entityDocumentType INT UNSIGNED NOT NULL COMMENT \'Column row identifier\', UNIQUE INDEX UNIQ_D3840442BF396750 (id), INDEX IDX_D3840442C5336D7C (fk_entityDocumentType), INDEX IDX_D38404423EBA7B02 (fk_store), UNIQUE INDEX unq_entityDocumentTypeSetting (fk_store, fk_entityDocumentType), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8 COLLATE utf8_unicode_ci ENGINE = InnoDB');
        $this->addSql('ALTER TABLE clientDocumentTypeSetting ADD CONSTRAINT FK_22E1838C46421294 FOREIGN KEY (fk_clientDocumentType) REFERENCES clientDocumentType (id) ON DELETE CASCADE');
        $this->addSql('ALTER TABLE clientDocumentTypeSetting ADD CONSTRAINT FK_22E1838C3EBA7B02 FOREIGN KEY (fk_store) REFERENCES store (id) ON DELETE CASCADE');
        $this->addSql('ALTER TABLE supplierDocumentTypeSetting ADD CONSTRAINT FK_3B2BCDC8B7CE372 FOREIGN KEY (fk_supplierDocumentType) REFERENCES supplierDocumentType (id) ON DELETE CASCADE');
        $this->addSql('ALTER TABLE supplierDocumentTypeSetting ADD CONSTRAINT FK_3B2BCDC3EBA7B02 FOREIGN KEY (fk_store) REFERENCES store (id) ON DELETE CASCADE');
        $this->addSql('ALTER TABLE entityDocumentTypeSetting ADD CONSTRAINT FK_D3840442C5336D7C FOREIGN KEY (fk_entityDocumentType) REFERENCES entityDocumentType (id) ON DELETE CASCADE');
        $this->addSql('ALTER TABLE entityDocumentTypeSetting ADD CONSTRAINT FK_D38404423EBA7B02 FOREIGN KEY (fk_store) REFERENCES store (id) ON DELETE CASCADE');
        $this->addSql('DROP TABLE documentSetting');
        $this->addSql('DROP TABLE documentType');
    }

    /**
     * @param Schema $schema
     */
    public function down(Schema $schema)
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->abortIf($this->connection->getDatabasePlatform()->getName() != 'mysql', 'Migration can only be executed safely on \'mysql\'.');

        $this->addSql('ALTER TABLE clientDocumentTypeSetting DROP FOREIGN KEY FK_22E1838C46421294');
        $this->addSql('ALTER TABLE supplierDocumentTypeSetting DROP FOREIGN KEY FK_3B2BCDC8B7CE372');
        $this->addSql('ALTER TABLE entityDocumentTypeSetting DROP FOREIGN KEY FK_D3840442C5336D7C');
        $this->addSql('CREATE TABLE documentSetting (id INT UNSIGNED AUTO_INCREMENT NOT NULL COMMENT \'Column row identifier\', fk_store INT UNSIGNED DEFAULT NULL COMMENT \'Column row identifier\', seriesPrefix VARCHAR(8) DEFAULT NULL COLLATE utf8_unicode_ci COMMENT \'Series prefix\', seriesNumber BIGINT UNSIGNED DEFAULT 0 NOT NULL COMMENT \'Series number\', insertTime DATETIME NOT NULL COMMENT \'Date and time insertion\', insertUser VARCHAR(32) NOT NULL COLLATE utf8_unicode_ci COMMENT \'User insertion\', isEnabled TINYINT(1) DEFAULT \'0\' NOT NULL COMMENT \'Determines whether the registry is enabled\', fk_documentType INT UNSIGNED NOT NULL COMMENT \'Column row identifier\', UNIQUE INDEX UNIQ_1798D7E1BF396750 (id), UNIQUE INDEX unq_documentSetting (fk_store, fk_documentType), INDEX IDX_1798D7E13EBA7B02 (fk_store), INDEX IDX_1798D7E193F01110 (fk_documentType), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8 COLLATE utf8_unicode_ci ENGINE = InnoDB');
        $this->addSql('CREATE TABLE documentType (id INT UNSIGNED AUTO_INCREMENT NOT NULL COMMENT \'Column row identifier\', name VARCHAR(128) NOT NULL COLLATE utf8_unicode_ci COMMENT \'Name\', prefix VARCHAR(8) NOT NULL COLLATE utf8_unicode_ci COMMENT \'Prefix\', entityRole VARCHAR(16) NOT NULL COLLATE utf8_unicode_ci COMMENT \'Entity role\', operation VARCHAR(16) NOT NULL COLLATE utf8_unicode_ci COMMENT \'Nature of operations\', insertTime DATETIME NOT NULL COMMENT \'Date and time insertion\', insertUser VARCHAR(32) NOT NULL COLLATE utf8_unicode_ci COMMENT \'User insertion\', isEnabled TINYINT(1) DEFAULT \'0\' NOT NULL COMMENT \'Determines whether the registry is enabled\', UNIQUE INDEX UNIQ_B22D1309BF396750 (id), INDEX idx_documentType_entityRole (entityRole), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8 COLLATE utf8_unicode_ci ENGINE = InnoDB');
        $this->addSql('ALTER TABLE documentSetting ADD CONSTRAINT FK_1798D7E13EBA7B02 FOREIGN KEY (fk_store) REFERENCES store (id) ON DELETE CASCADE');
        $this->addSql('ALTER TABLE documentSetting ADD CONSTRAINT FK_1798D7E193F01110 FOREIGN KEY (fk_documentType) REFERENCES documentType (id) ON DELETE CASCADE');
        $this->addSql('DROP TABLE clientDocumentType');
        $this->addSql('DROP TABLE clientDocumentTypeSetting');
        $this->addSql('DROP TABLE supplierDocumentType');
        $this->addSql('DROP TABLE supplierDocumentTypeSetting');
        $this->addSql('DROP TABLE entityDocumentType');
        $this->addSql('DROP TABLE entityDocumentTypeSetting');
    }
}
