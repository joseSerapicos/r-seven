<?php

namespace Application\DoctrineMigrations;

use Doctrine\DBAL\Migrations\AbstractMigration;
use Doctrine\DBAL\Schema\Schema;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
class Version20180127173304 extends AbstractMigration
{
    /**
     * @param Schema $schema
     */
    public function up(Schema $schema)
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->abortIf($this->connection->getDatabasePlatform()->getName() != 'mysql', 'Migration can only be executed safely on \'mysql\'.');

        $this->addSql('ALTER TABLE packageBooking ADD fk_packageService INT UNSIGNED NOT NULL COMMENT \'Column row identifier\'');
        $this->addSql('ALTER TABLE packageBooking ADD CONSTRAINT FK_E879401D9CE6DEF8 FOREIGN KEY (fk_packageService) REFERENCES packageService (id) ON DELETE RESTRICT');
        $this->addSql('CREATE INDEX IDX_E879401D9CE6DEF8 ON packageBooking (fk_packageService)');
    }

    /**
     * @param Schema $schema
     */
    public function down(Schema $schema)
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->abortIf($this->connection->getDatabasePlatform()->getName() != 'mysql', 'Migration can only be executed safely on \'mysql\'.');

        $this->addSql('ALTER TABLE packageBooking DROP FOREIGN KEY FK_E879401D9CE6DEF8');
        $this->addSql('DROP INDEX IDX_E879401D9CE6DEF8 ON packageBooking');
        $this->addSql('ALTER TABLE packageBooking DROP fk_packageService');
    }
}
