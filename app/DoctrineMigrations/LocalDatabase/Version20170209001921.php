<?php

namespace Application\DoctrineMigrations;

use Doctrine\DBAL\Migrations\AbstractMigration;
use Doctrine\DBAL\Schema\Schema;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
class Version20170209001921 extends AbstractMigration
{
    /**
     * @param Schema $schema
     */
    public function up(Schema $schema)
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->abortIf($this->connection->getDatabasePlatform()->getName() != 'mysql', 'Migration can only be executed safely on \'mysql\'.');

        $this->addSql('DROP INDEX idx_entity_name ON entity');
        $this->addSql('ALTER TABLE entity CHANGE title title VARCHAR(4) NOT NULL COMMENT \'Title\', CHANGE birthDate birthDate DATE NOT NULL COMMENT \'Birth date\'');
        $this->addSql('CREATE INDEX idx_entity_fullName ON entity (name, surname)');
    }

    /**
     * @param Schema $schema
     */
    public function down(Schema $schema)
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->abortIf($this->connection->getDatabasePlatform()->getName() != 'mysql', 'Migration can only be executed safely on \'mysql\'.');

        $this->addSql('DROP INDEX idx_entity_fullName ON entity');
        $this->addSql('ALTER TABLE entity CHANGE title title VARCHAR(4) DEFAULT NULL COLLATE utf8_unicode_ci COMMENT \'Title\', CHANGE birthDate birthDate DATE DEFAULT NULL COMMENT \'Birth date\'');
        $this->addSql('CREATE INDEX idx_entity_name ON entity (name)');
    }
}
