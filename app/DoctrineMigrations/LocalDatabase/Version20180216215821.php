<?php

namespace Application\DoctrineMigrations;

use Doctrine\DBAL\Migrations\AbstractMigration;
use Doctrine\DBAL\Schema\Schema;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
class Version20180216215821 extends AbstractMigration
{
    /**
     * @param Schema $schema
     */
    public function up(Schema $schema)
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->abortIf($this->connection->getDatabasePlatform()->getName() != 'mysql', 'Migration can only be executed safely on \'mysql\'.');

        $this->addSql('DROP INDEX UNIQ_B5E7FAA15E237E06 ON serviceAllot');
        $this->addSql('ALTER TABLE serviceAllot ADD description VARCHAR(64) DEFAULT NULL COMMENT \'Description\', DROP name');
        $this->addSql('ALTER TABLE bookingService DROP FOREIGN KEY FK_6C897F33673761A1');
        $this->addSql('DROP INDEX IDX_6C897F33673761A1 ON bookingService');
        $this->addSql('ALTER TABLE bookingService CHANGE fk_groupingservice fk_groupingBookingService INT UNSIGNED DEFAULT NULL COMMENT \'Column row identifier\'');
        $this->addSql('ALTER TABLE bookingService ADD CONSTRAINT FK_6C897F333CF9328F FOREIGN KEY (fk_groupingBookingService) REFERENCES bookingService (id) ON DELETE RESTRICT');
        $this->addSql('CREATE INDEX IDX_6C897F333CF9328F ON bookingService (fk_groupingBookingService)');
    }

    /**
     * @param Schema $schema
     */
    public function down(Schema $schema)
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->abortIf($this->connection->getDatabasePlatform()->getName() != 'mysql', 'Migration can only be executed safely on \'mysql\'.');

        $this->addSql('ALTER TABLE bookingService DROP FOREIGN KEY FK_6C897F333CF9328F');
        $this->addSql('DROP INDEX IDX_6C897F333CF9328F ON bookingService');
        $this->addSql('ALTER TABLE bookingService CHANGE fk_groupingbookingservice fk_groupingService INT UNSIGNED DEFAULT NULL COMMENT \'Column row identifier\'');
        $this->addSql('ALTER TABLE bookingService ADD CONSTRAINT FK_6C897F33673761A1 FOREIGN KEY (fk_groupingService) REFERENCES bookingService (id)');
        $this->addSql('CREATE INDEX IDX_6C897F33673761A1 ON bookingService (fk_groupingService)');
        $this->addSql('ALTER TABLE serviceAllot ADD name VARCHAR(64) NOT NULL COLLATE utf8_unicode_ci COMMENT \'Name\', DROP description');
        $this->addSql('CREATE UNIQUE INDEX UNIQ_B5E7FAA15E237E06 ON serviceAllot (name)');
    }
}
