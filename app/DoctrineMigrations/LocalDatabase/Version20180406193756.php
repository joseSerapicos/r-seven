<?php

namespace Application\DoctrineMigrations;

use Doctrine\DBAL\Migrations\AbstractMigration;
use Doctrine\DBAL\Schema\Schema;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
class Version20180406193756 extends AbstractMigration
{
    /**
     * @param Schema $schema
     */
    public function up(Schema $schema)
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->abortIf($this->connection->getDatabasePlatform()->getName() !== 'mysql', 'Migration can only be executed safely on \'mysql\'.');

        $this->addSql('CREATE TABLE email (id INT UNSIGNED AUTO_INCREMENT NOT NULL COMMENT \'Column row identifier\', `from` VARCHAR(64) NOT NULL COMMENT \'From\', `to` VARCHAR(112) NOT NULL COMMENT \'To\', cc VARCHAR(112) DEFAULT NULL COMMENT \'Carbon Copy\', bcc VARCHAR(112) DEFAULT NULL COMMENT \'Blind Carbon Copy\', subject VARCHAR(96) NOT NULL COMMENT \'Subject\', text VARCHAR(512) NOT NULL COMMENT \'Text of email\', insertTime DATETIME NOT NULL COMMENT \'Date and time insertion\', insertUser VARCHAR(32) NOT NULL COMMENT \'User insertion\', isEnabled TINYINT(1) DEFAULT \'0\' NOT NULL COMMENT \'Determines whether the registry is enabled\', UNIQUE INDEX UNIQ_E7927C74BF396750 (id), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8 COLLATE utf8_unicode_ci ENGINE = InnoDB');
        $this->addSql('ALTER TABLE supplierDocument ADD isSent TINYINT(1) DEFAULT \'0\' NOT NULL COMMENT \'Determines if the document was sent (sent the PDF file)\'');
        $this->addSql('ALTER TABLE clientDocument ADD isSent TINYINT(1) DEFAULT \'0\' NOT NULL COMMENT \'Determines if the document was sent (sent the PDF file)\'');
        $this->addSql('ALTER TABLE emailTemplate ADD subject VARCHAR(96) NOT NULL COMMENT \'Subject\'');
    }

    /**
     * @param Schema $schema
     */
    public function down(Schema $schema)
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->abortIf($this->connection->getDatabasePlatform()->getName() !== 'mysql', 'Migration can only be executed safely on \'mysql\'.');

        $this->addSql('DROP TABLE email');
        $this->addSql('ALTER TABLE clientDocument DROP isSent');
        $this->addSql('ALTER TABLE emailTemplate DROP subject');
        $this->addSql('ALTER TABLE supplierDocument DROP isSent');
    }
}
