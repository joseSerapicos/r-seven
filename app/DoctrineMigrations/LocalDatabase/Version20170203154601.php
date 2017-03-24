<?php

namespace Application\DoctrineMigrations;

use Doctrine\DBAL\Migrations\AbstractMigration;
use Doctrine\DBAL\Schema\Schema;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
class Version20170203154601 extends AbstractMigration
{
    /**
     * @param Schema $schema
     */
    public function up(Schema $schema)
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->abortIf($this->connection->getDatabasePlatform()->getName() != 'mysql', 'Migration can only be executed safely on \'mysql\'.');

        $this->addSql('ALTER TABLE bookingSetting DROP FOREIGN KEY FK_12605D798C414F30');
        $this->addSql('ALTER TABLE bookingSetting CHANGE fk_moduleMenu fk_moduleMenu INT UNSIGNED NOT NULL COMMENT \'Column row identifier\'');
        $this->addSql('ALTER TABLE bookingSetting ADD CONSTRAINT FK_12605D798C414F30 FOREIGN KEY (fk_moduleMenu) REFERENCES moduleMenu (id) ON DELETE RESTRICT');
    }

    /**
     * @param Schema $schema
     */
    public function down(Schema $schema)
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->abortIf($this->connection->getDatabasePlatform()->getName() != 'mysql', 'Migration can only be executed safely on \'mysql\'.');

        $this->addSql('ALTER TABLE bookingSetting DROP FOREIGN KEY FK_12605D798C414F30');
        $this->addSql('ALTER TABLE bookingSetting CHANGE fk_moduleMenu fk_moduleMenu INT UNSIGNED DEFAULT NULL COMMENT \'Column row identifier\'');
        $this->addSql('ALTER TABLE bookingSetting ADD CONSTRAINT FK_12605D798C414F30 FOREIGN KEY (fk_moduleMenu) REFERENCES moduleMenu (id) ON DELETE CASCADE');
    }
}
