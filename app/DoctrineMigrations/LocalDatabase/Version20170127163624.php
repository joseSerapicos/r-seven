<?php

namespace Application\DoctrineMigrations;

use Doctrine\DBAL\Migrations\AbstractMigration;
use Doctrine\DBAL\Schema\Schema;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
class Version20170127163624 extends AbstractMigration
{
    /**
     * @param Schema $schema
     */
    public function up(Schema $schema)
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->abortIf($this->connection->getDatabasePlatform()->getName() != 'mysql', 'Migration can only be executed safely on \'mysql\'.');

        $this->addSql('DROP INDEX idx_place_city ON place');
        $this->addSql('DROP INDEX idx_place_icaoCode ON place');
        $this->addSql('ALTER TABLE place ADD isoCode VARCHAR(5) DEFAULT NULL COMMENT \'ISO code\', ADD elevation SMALLINT UNSIGNED DEFAULT NULL COMMENT \'Elevation\', DROP city, DROP altitude, CHANGE latitude latitude VARCHAR(16) DEFAULT NULL COMMENT \'Latitude\', CHANGE longitude longitude VARCHAR(16) DEFAULT NULL COMMENT \'Longitude\', CHANGE timezone timezone VARCHAR(32) DEFAULT NULL COMMENT \'Timezone\'');
        $this->addSql('CREATE UNIQUE INDEX UNIQ_741D53CD5E237E06 ON place (name)');
    }

    /**
     * @param Schema $schema
     */
    public function down(Schema $schema)
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->abortIf($this->connection->getDatabasePlatform()->getName() != 'mysql', 'Migration can only be executed safely on \'mysql\'.');

        $this->addSql('DROP INDEX UNIQ_741D53CD5E237E06 ON place');
        $this->addSql('ALTER TABLE place ADD city VARCHAR(128) DEFAULT NULL COLLATE utf8_unicode_ci COMMENT \'City\', ADD altitude VARCHAR(128) DEFAULT NULL COLLATE utf8_unicode_ci COMMENT \'Altitude\', DROP isoCode, DROP elevation, CHANGE latitude latitude VARCHAR(128) DEFAULT NULL COLLATE utf8_unicode_ci COMMENT \'Latitude\', CHANGE longitude longitude VARCHAR(128) DEFAULT NULL COLLATE utf8_unicode_ci COMMENT \'Longitude\', CHANGE timezone timezone VARCHAR(128) DEFAULT NULL COLLATE utf8_unicode_ci COMMENT \'Timezone\'');
        $this->addSql('CREATE INDEX idx_place_city ON place (city)');
        $this->addSql('CREATE INDEX idx_place_icaoCode ON place (icaoCode)');
    }
}
