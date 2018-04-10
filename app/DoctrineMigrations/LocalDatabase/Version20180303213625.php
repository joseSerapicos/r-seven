<?php

namespace Application\DoctrineMigrations;

use Doctrine\DBAL\Migrations\AbstractMigration;
use Doctrine\DBAL\Schema\Schema;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
class Version20180303213625 extends AbstractMigration
{
    /**
     * @param Schema $schema
     */
    public function up(Schema $schema)
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->abortIf($this->connection->getDatabasePlatform()->getName() != 'mysql', 'Migration can only be executed safely on \'mysql\'.');

        $this->addSql('CREATE TABLE grouperService (id INT UNSIGNED AUTO_INCREMENT NOT NULL COMMENT \'Column row identifier\', fk_service INT UNSIGNED NOT NULL COMMENT \'Column row identifier\', insertTime DATETIME NOT NULL COMMENT \'Date and time insertion\', insertUser VARCHAR(32) NOT NULL COMMENT \'User insertion\', isEnabled TINYINT(1) DEFAULT \'0\' NOT NULL COMMENT \'Determines whether the registry is enabled\', UNIQUE INDEX UNIQ_8A343387BF396750 (id), UNIQUE INDEX UNIQ_8A34338711B2A7FE (fk_service), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8 COLLATE utf8_unicode_ci ENGINE = InnoDB');
        $this->addSql('ALTER TABLE grouperService ADD CONSTRAINT FK_8A34338711B2A7FE FOREIGN KEY (fk_service) REFERENCES service (id) ON DELETE RESTRICT');
        $this->addSql('DROP TABLE groupingService');
        $this->addSql('ALTER TABLE bookingService DROP FOREIGN KEY FK_6C897F333CF9328F');
        $this->addSql('DROP INDEX IDX_6C897F333CF9328F ON bookingService');
        $this->addSql('ALTER TABLE bookingService DROP groupingTotalVatSell, CHANGE fk_groupingbookingservice fk_grouperBookingService INT UNSIGNED DEFAULT NULL COMMENT \'Column row identifier\'');
        $this->addSql('ALTER TABLE bookingService ADD CONSTRAINT FK_6C897F33F6C533A1 FOREIGN KEY (fk_grouperBookingService) REFERENCES bookingService (id) ON DELETE RESTRICT');
        $this->addSql('CREATE INDEX IDX_6C897F33F6C533A1 ON bookingService (fk_grouperBookingService)');
    }

    /**
     * @param Schema $schema
     */
    public function down(Schema $schema)
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->abortIf($this->connection->getDatabasePlatform()->getName() != 'mysql', 'Migration can only be executed safely on \'mysql\'.');

        $this->addSql('CREATE TABLE groupingService (id INT UNSIGNED AUTO_INCREMENT NOT NULL COMMENT \'Column row identifier\', fk_service INT UNSIGNED NOT NULL COMMENT \'Column row identifier\', insertTime DATETIME NOT NULL COMMENT \'Date and time insertion\', insertUser VARCHAR(32) NOT NULL COLLATE utf8_unicode_ci COMMENT \'User insertion\', isEnabled TINYINT(1) DEFAULT \'0\' NOT NULL COMMENT \'Determines whether the registry is enabled\', UNIQUE INDEX UNIQ_BE943594BF396750 (id), UNIQUE INDEX UNIQ_BE94359411B2A7FE (fk_service), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8 COLLATE utf8_unicode_ci ENGINE = InnoDB');
        $this->addSql('ALTER TABLE groupingService ADD CONSTRAINT FK_BE94359411B2A7FE FOREIGN KEY (fk_service) REFERENCES service (id)');
        $this->addSql('DROP TABLE grouperService');
        $this->addSql('ALTER TABLE bookingService DROP FOREIGN KEY FK_6C897F33F6C533A1');
        $this->addSql('DROP INDEX IDX_6C897F33F6C533A1 ON bookingService');
        $this->addSql('ALTER TABLE bookingService ADD groupingTotalVatSell NUMERIC(10, 2) DEFAULT \'0.00\' NOT NULL COMMENT \'Grouping total VAT of sell value\', CHANGE fk_grouperbookingservice fk_groupingBookingService INT UNSIGNED DEFAULT NULL COMMENT \'Column row identifier\'');
        $this->addSql('ALTER TABLE bookingService ADD CONSTRAINT FK_6C897F333CF9328F FOREIGN KEY (fk_groupingBookingService) REFERENCES bookingService (id)');
        $this->addSql('CREATE INDEX IDX_6C897F333CF9328F ON bookingService (fk_groupingBookingService)');
    }
}
