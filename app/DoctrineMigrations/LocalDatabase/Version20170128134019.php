<?php

namespace Application\DoctrineMigrations;

use Doctrine\DBAL\Migrations\AbstractMigration;
use Doctrine\DBAL\Schema\Schema;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
class Version20170128134019 extends AbstractMigration
{
    /**
     * @param Schema $schema
     */
    public function up(Schema $schema)
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->abortIf($this->connection->getDatabasePlatform()->getName() != 'mysql', 'Migration can only be executed safely on \'mysql\'.');

        $this->addSql('ALTER TABLE module CHANGE priority priority SMALLINT UNSIGNED DEFAULT 0 NOT NULL COMMENT \'Priority for menu. Determines the order in the modules list. Overwrites the parent in system database\'');
        $this->addSql('ALTER TABLE moduleMenu CHANGE priority priority SMALLINT UNSIGNED DEFAULT 0 NOT NULL COMMENT \'Priority for menu. Determines the order in the menus list. Overwrites the parent in system database\'');
        $this->addSql('ALTER TABLE serviceObservation ADD priority SMALLINT UNSIGNED DEFAULT 0 NOT NULL COMMENT \'Priority for menu. Determines the order in the menus list\'');
        $this->addSql('ALTER TABLE bookingObservation ADD priority SMALLINT UNSIGNED DEFAULT 0 NOT NULL COMMENT \'Priority for menu. Determines the order in the menus list\'');
    }

    /**
     * @param Schema $schema
     */
    public function down(Schema $schema)
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->abortIf($this->connection->getDatabasePlatform()->getName() != 'mysql', 'Migration can only be executed safely on \'mysql\'.');

        $this->addSql('ALTER TABLE bookingObservation DROP priority');
        $this->addSql('ALTER TABLE module CHANGE priority priority SMALLINT UNSIGNED DEFAULT NULL COMMENT \'Priority for menu. Determines the order in the modules list. Overwrites the parent in system database\'');
        $this->addSql('ALTER TABLE moduleMenu CHANGE priority priority SMALLINT UNSIGNED DEFAULT NULL COMMENT \'Priority for menu. Determines the order in the menus list. Overwrites the parent in system database\'');
        $this->addSql('ALTER TABLE serviceObservation DROP priority');
    }
}
