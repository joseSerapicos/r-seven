<?php

namespace Application\DoctrineMigrations;

use Doctrine\DBAL\Migrations\AbstractMigration;
use Doctrine\DBAL\Schema\Schema;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
class Version20180124164506 extends AbstractMigration
{
    /**
     * @param Schema $schema
     */
    public function up(Schema $schema)
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->abortIf($this->connection->getDatabasePlatform()->getName() != 'mysql', 'Migration can only be executed safely on \'mysql\'.');

        $this->addSql('CREATE TABLE serviceFixedCost (id INT UNSIGNED AUTO_INCREMENT NOT NULL COMMENT \'Column row identifier\', fk_service INT UNSIGNED NOT NULL COMMENT \'Column row identifier\', description VARCHAR(64) DEFAULT NULL COMMENT \'Description\', startDate DATE NOT NULL COMMENT \'Start date of validation\', endDate DATE NOT NULL COMMENT \'End date of validation\', isVatIncluded TINYINT(1) DEFAULT \'0\' COMMENT \'Controls how to return the fake fields user_...\', costValue NUMERIC(10, 4) DEFAULT \'0\' NOT NULL COMMENT \'Cost value\', vatValueCost NUMERIC(10, 4) DEFAULT \'0\' NOT NULL COMMENT \'Cost VAT value\', insertTime DATETIME NOT NULL COMMENT \'Date and time insertion\', insertUser VARCHAR(32) NOT NULL COMMENT \'User insertion\', isEnabled TINYINT(1) DEFAULT \'0\' NOT NULL COMMENT \'Determines whether the registry is enabled\', fk_vatCode INT UNSIGNED NOT NULL COMMENT \'Column row identifier\', UNIQUE INDEX UNIQ_21CFFE18BF396750 (id), INDEX IDX_21CFFE1811B2A7FE (fk_service), INDEX IDX_21CFFE18DB62DD09 (fk_vatCode), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8 COLLATE utf8_unicode_ci ENGINE = InnoDB');
        $this->addSql('ALTER TABLE serviceFixedCost ADD CONSTRAINT FK_21CFFE1811B2A7FE FOREIGN KEY (fk_service) REFERENCES service (id) ON DELETE CASCADE');
        $this->addSql('ALTER TABLE serviceFixedCost ADD CONSTRAINT FK_21CFFE18DB62DD09 FOREIGN KEY (fk_vatCode) REFERENCES vatCode (id) ON DELETE RESTRICT');
    }

    /**
     * @param Schema $schema
     */
    public function down(Schema $schema)
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->abortIf($this->connection->getDatabasePlatform()->getName() != 'mysql', 'Migration can only be executed safely on \'mysql\'.');

        $this->addSql('DROP TABLE serviceFixedCost');
    }
}
