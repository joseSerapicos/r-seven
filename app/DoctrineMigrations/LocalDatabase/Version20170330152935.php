<?php

namespace Application\DoctrineMigrations;

use Doctrine\DBAL\Migrations\AbstractMigration;
use Doctrine\DBAL\Schema\Schema;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
class Version20170330152935 extends AbstractMigration
{
    /**
     * @param Schema $schema
     */
    public function up(Schema $schema)
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->abortIf($this->connection->getDatabasePlatform()->getName() != 'mysql', 'Migration can only be executed safely on \'mysql\'.');

        $this->addSql('ALTER TABLE store ADD fk_fallbackStore INT UNSIGNED DEFAULT NULL COMMENT \'Column row identifier\', DROP shareBasicInfo');
        $this->addSql('ALTER TABLE store ADD CONSTRAINT FK_FF575877A9C7D62D FOREIGN KEY (fk_fallbackStore) REFERENCES store (id) ON DELETE SET NULL');
        $this->addSql('CREATE INDEX IDX_FF575877A9C7D62D ON store (fk_fallbackStore)');
        $this->addSql('ALTER TABLE entity CHANGE legalName legalName VARCHAR(128) DEFAULT NULL COMMENT \'Legal Name\'');
    }

    /**
     * @param Schema $schema
     */
    public function down(Schema $schema)
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->abortIf($this->connection->getDatabasePlatform()->getName() != 'mysql', 'Migration can only be executed safely on \'mysql\'.');

        $this->addSql('ALTER TABLE entity CHANGE legalName legalName VARCHAR(128) DEFAULT NULL COLLATE utf8_unicode_ci COMMENT \'Formal Name\'');
        $this->addSql('ALTER TABLE store DROP FOREIGN KEY FK_FF575877A9C7D62D');
        $this->addSql('DROP INDEX IDX_FF575877A9C7D62D ON store');
        $this->addSql('ALTER TABLE store ADD shareBasicInfo TINYINT(1) DEFAULT \'0\' NOT NULL COMMENT \'Share basic info\', DROP fk_fallbackStore');
    }
}
