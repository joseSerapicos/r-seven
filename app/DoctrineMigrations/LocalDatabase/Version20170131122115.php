<?php

namespace Application\DoctrineMigrations;

use Doctrine\DBAL\Migrations\AbstractMigration;
use Doctrine\DBAL\Schema\Schema;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
class Version20170131122115 extends AbstractMigration
{
    /**
     * @param Schema $schema
     */
    public function up(Schema $schema)
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->abortIf($this->connection->getDatabasePlatform()->getName() != 'mysql', 'Migration can only be executed safely on \'mysql\'.');

        $this->addSql('DROP INDEX UNIQ_B5A1ED155E237E06 ON serviceAvailability');
        $this->addSql('ALTER TABLE serviceAvailability ADD description VARCHAR(64) DEFAULT NULL COMMENT \'Description\', DROP name');
        $this->addSql('ALTER TABLE servicePrice CHANGE description description VARCHAR(64) DEFAULT NULL COMMENT \'Description\'');
    }

    /**
     * @param Schema $schema
     */
    public function down(Schema $schema)
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->abortIf($this->connection->getDatabasePlatform()->getName() != 'mysql', 'Migration can only be executed safely on \'mysql\'.');

        $this->addSql('ALTER TABLE serviceAvailability ADD name VARCHAR(64) NOT NULL COLLATE utf8_unicode_ci COMMENT \'Name\', DROP description');
        $this->addSql('CREATE UNIQUE INDEX UNIQ_B5A1ED155E237E06 ON serviceAvailability (name)');
        $this->addSql('ALTER TABLE servicePrice CHANGE description description VARCHAR(256) DEFAULT NULL COLLATE utf8_unicode_ci COMMENT \'Description\'');
    }
}
