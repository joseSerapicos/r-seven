<?php

namespace Application\DoctrineMigrations;

use Doctrine\DBAL\Migrations\AbstractMigration;
use Doctrine\DBAL\Schema\Schema;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
class Version20171124144021 extends AbstractMigration
{
    /**
     * @param Schema $schema
     */
    public function up(Schema $schema)
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->abortIf($this->connection->getDatabasePlatform()->getName() != 'mysql', 'Migration can only be executed safely on \'mysql\'.');

        $this->addSql('ALTER TABLE booking ADD fk_moduleMenu INT UNSIGNED NOT NULL COMMENT \'Column row identifier\'');
        $this->addSql('ALTER TABLE booking ADD CONSTRAINT FK_E00CEDDE8C414F30 FOREIGN KEY (fk_moduleMenu) REFERENCES moduleMenu (id) ON DELETE RESTRICT');
        $this->addSql('CREATE INDEX IDX_E00CEDDE8C414F30 ON booking (fk_moduleMenu)');
        $this->addSql('CREATE UNIQUE INDEX unq_booking_code ON booking (fk_moduleMenu, codePrefix, codeNumber)');
    }

    /**
     * @param Schema $schema
     */
    public function down(Schema $schema)
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->abortIf($this->connection->getDatabasePlatform()->getName() != 'mysql', 'Migration can only be executed safely on \'mysql\'.');

        $this->addSql('ALTER TABLE booking DROP FOREIGN KEY FK_E00CEDDE8C414F30');
        $this->addSql('DROP INDEX IDX_E00CEDDE8C414F30 ON booking');
        $this->addSql('DROP INDEX unq_booking_code ON booking');
        $this->addSql('ALTER TABLE booking DROP fk_moduleMenu');
    }
}
