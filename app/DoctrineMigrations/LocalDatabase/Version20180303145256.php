<?php

namespace Application\DoctrineMigrations;

use Doctrine\DBAL\Migrations\AbstractMigration;
use Doctrine\DBAL\Schema\Schema;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
class Version20180303145256 extends AbstractMigration
{
    /**
     * @param Schema $schema
     */
    public function up(Schema $schema)
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->abortIf($this->connection->getDatabasePlatform()->getName() != 'mysql', 'Migration can only be executed safely on \'mysql\'.');

        $this->addSql('ALTER TABLE packageServiceService ADD durationType VARCHAR(16) NOT NULL COMMENT \'Type of duration\', ADD quantityType VARCHAR(16) NOT NULL COMMENT \'Type of quantity\', ADD quantity SMALLINT UNSIGNED DEFAULT 0 COMMENT \'Fixed quantity\', DROP hasQuantityEdition, CHANGE durationDays durationDays SMALLINT UNSIGNED DEFAULT 0 COMMENT \'Days of duration of service\'');
    }

    /**
     * @param Schema $schema
     */
    public function down(Schema $schema)
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->abortIf($this->connection->getDatabasePlatform()->getName() != 'mysql', 'Migration can only be executed safely on \'mysql\'.');

        $this->addSql('ALTER TABLE packageServiceService ADD hasQuantityEdition TINYINT(1) DEFAULT \'0\' NOT NULL COMMENT \'Define if quantity can be changed by the user\', DROP durationType, DROP quantityType, DROP quantity, CHANGE durationDays durationDays SMALLINT UNSIGNED DEFAULT 0 NOT NULL COMMENT \'Days of duration of service\'');
    }
}
