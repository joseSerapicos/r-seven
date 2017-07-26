<?php

namespace Application\DoctrineMigrations;

use Doctrine\DBAL\Migrations\AbstractMigration;
use Doctrine\DBAL\Schema\Schema;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
class Version20170706121440 extends AbstractMigration
{
    /**
     * @param Schema $schema
     */
    public function up(Schema $schema)
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->abortIf($this->connection->getDatabasePlatform()->getName() != 'mysql', 'Migration can only be executed safely on \'mysql\'.');

        $this->addSql('CREATE TABLE clientDocumentRectificationDetail (id INT UNSIGNED AUTO_INCREMENT NOT NULL COMMENT \'Column row identifier\', fk_service INT UNSIGNED NOT NULL COMMENT \'Column row identifier\', description VARCHAR(256) NOT NULL COMMENT \'Description\', quantity SMALLINT UNSIGNED NOT NULL COMMENT \'Quantity\', value NUMERIC(10, 4) DEFAULT \'0\' NOT NULL COMMENT \'Value\', vatValue NUMERIC(10, 4) DEFAULT \'0\' NOT NULL COMMENT \'VAT value\', subTotal NUMERIC(10, 2) DEFAULT \'0\' NOT NULL COMMENT \'Total value without VAT\', totalVat NUMERIC(10, 2) DEFAULT \'0\' NOT NULL COMMENT \'Total VAT\', insertTime DATETIME NOT NULL COMMENT \'Date and time insertion\', insertUser VARCHAR(32) NOT NULL COMMENT \'User insertion\', isEnabled TINYINT(1) DEFAULT \'0\' NOT NULL COMMENT \'Determines whether the registry is enabled\', fk_clientDocument INT UNSIGNED NOT NULL COMMENT \'Column row identifier\', fk_originalClientDocument INT UNSIGNED NOT NULL COMMENT \'Column row identifier\', fk_vatCode INT UNSIGNED NOT NULL COMMENT \'Column row identifier\', UNIQUE INDEX UNIQ_499606B3BF396750 (id), INDEX IDX_499606B37264A4C9 (fk_clientDocument), INDEX IDX_499606B3ABA07FC8 (fk_originalClientDocument), INDEX IDX_499606B311B2A7FE (fk_service), INDEX IDX_499606B3DB62DD09 (fk_vatCode), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8 COLLATE utf8_unicode_ci ENGINE = InnoDB');
        $this->addSql('ALTER TABLE clientDocumentRectificationDetail ADD CONSTRAINT FK_499606B37264A4C9 FOREIGN KEY (fk_clientDocument) REFERENCES clientDocument (id) ON DELETE RESTRICT');
        $this->addSql('ALTER TABLE clientDocumentRectificationDetail ADD CONSTRAINT FK_499606B3ABA07FC8 FOREIGN KEY (fk_originalClientDocument) REFERENCES clientDocument (id) ON DELETE RESTRICT');
        $this->addSql('ALTER TABLE clientDocumentRectificationDetail ADD CONSTRAINT FK_499606B311B2A7FE FOREIGN KEY (fk_service) REFERENCES service (id) ON DELETE RESTRICT');
        $this->addSql('ALTER TABLE clientDocumentRectificationDetail ADD CONSTRAINT FK_499606B3DB62DD09 FOREIGN KEY (fk_vatCode) REFERENCES vatCode (id) ON DELETE RESTRICT');
    }

    /**
     * @param Schema $schema
     */
    public function down(Schema $schema)
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->abortIf($this->connection->getDatabasePlatform()->getName() != 'mysql', 'Migration can only be executed safely on \'mysql\'.');

        $this->addSql('DROP TABLE clientDocumentRectificationDetail');
    }
}
