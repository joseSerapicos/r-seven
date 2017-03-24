<?php

namespace Application\DoctrineMigrations;

use Doctrine\DBAL\Migrations\AbstractMigration;
use Doctrine\DBAL\Schema\Schema;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
class Version20170208154014 extends AbstractMigration
{
    /**
     * @param Schema $schema
     */
    public function up(Schema $schema)
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->abortIf($this->connection->getDatabasePlatform()->getName() != 'mysql', 'Migration can only be executed safely on \'mysql\'.');

        $this->addSql('ALTER TABLE bookingPax DROP FOREIGN KEY FK_D4B48D1A2E862CF8');
        $this->addSql('DROP INDEX unq_bookingPax_entity ON bookingPax');
        $this->addSql('DROP INDEX IDX_D4B48D1A2E862CF8 ON bookingPax');
        $this->addSql('ALTER TABLE bookingPax DROP fk_entity, CHANGE title title VARCHAR(4) NOT NULL COMMENT \'Title\', CHANGE name name VARCHAR(64) NOT NULL COMMENT \'Name\', CHANGE surname surname VARCHAR(64) NOT NULL COMMENT \'Surname\', CHANGE birthDate birthDate DATE NOT NULL COMMENT \'Birth date\'');
    }

    /**
     * @param Schema $schema
     */
    public function down(Schema $schema)
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->abortIf($this->connection->getDatabasePlatform()->getName() != 'mysql', 'Migration can only be executed safely on \'mysql\'.');

        $this->addSql('ALTER TABLE bookingPax ADD fk_entity INT UNSIGNED DEFAULT NULL COMMENT \'Column row identifier\', CHANGE title title VARCHAR(4) DEFAULT NULL COLLATE utf8_unicode_ci COMMENT \'Title\', CHANGE name name VARCHAR(64) DEFAULT NULL COLLATE utf8_unicode_ci COMMENT \'Name\', CHANGE surname surname VARCHAR(64) DEFAULT NULL COLLATE utf8_unicode_ci COMMENT \'Surname\', CHANGE birthDate birthDate DATE DEFAULT NULL COMMENT \'Birth date\'');
        $this->addSql('ALTER TABLE bookingPax ADD CONSTRAINT FK_D4B48D1A2E862CF8 FOREIGN KEY (fk_entity) REFERENCES entity (id)');
        $this->addSql('CREATE UNIQUE INDEX unq_bookingPax_entity ON bookingPax (fk_booking, fk_entity)');
        $this->addSql('CREATE INDEX IDX_D4B48D1A2E862CF8 ON bookingPax (fk_entity)');
    }
}
