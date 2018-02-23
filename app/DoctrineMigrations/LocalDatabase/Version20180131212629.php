<?php

namespace Application\DoctrineMigrations;

use Doctrine\DBAL\Migrations\AbstractMigration;
use Doctrine\DBAL\Schema\Schema;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
class Version20180131212629 extends AbstractMigration
{
    /**
     * @param Schema $schema
     */
    public function up(Schema $schema)
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->abortIf($this->connection->getDatabasePlatform()->getName() != 'mysql', 'Migration can only be executed safely on \'mysql\'.');

        $this->addSql('DROP INDEX idx_bookingService_dateAllotType ON bookingService');
        $this->addSql('DROP INDEX idx_bookingService_date ON bookingService');
        $this->addSql('ALTER TABLE bookingService ADD fk_allotTargetService INT UNSIGNED DEFAULT NULL COMMENT \'Column row identifier\', ADD fk_groupingService INT UNSIGNED DEFAULT NULL COMMENT \'Column row identifier\', DROP allotType');
        $this->addSql('ALTER TABLE bookingService ADD CONSTRAINT FK_6C897F3323D28966 FOREIGN KEY (fk_allotTargetService) REFERENCES service (id) ON DELETE RESTRICT');
        $this->addSql('ALTER TABLE bookingService ADD CONSTRAINT FK_6C897F33673761A1 FOREIGN KEY (fk_groupingService) REFERENCES bookingService (id) ON DELETE RESTRICT');
        $this->addSql('CREATE INDEX IDX_6C897F3323D28966 ON bookingService (fk_allotTargetService)');
        $this->addSql('CREATE INDEX IDX_6C897F33673761A1 ON bookingService (fk_groupingService)');
        $this->addSql('CREATE INDEX idx_bookingService_date ON bookingService (startDate, endDate, fk_allotTargetService)');
    }

    /**
     * @param Schema $schema
     */
    public function down(Schema $schema)
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->abortIf($this->connection->getDatabasePlatform()->getName() != 'mysql', 'Migration can only be executed safely on \'mysql\'.');

        $this->addSql('ALTER TABLE bookingService DROP FOREIGN KEY FK_6C897F3323D28966');
        $this->addSql('ALTER TABLE bookingService DROP FOREIGN KEY FK_6C897F33673761A1');
        $this->addSql('DROP INDEX IDX_6C897F3323D28966 ON bookingService');
        $this->addSql('DROP INDEX IDX_6C897F33673761A1 ON bookingService');
        $this->addSql('DROP INDEX idx_bookingService_date ON bookingService');
        $this->addSql('ALTER TABLE bookingService ADD allotType VARCHAR(16) DEFAULT NULL COLLATE utf8_unicode_ci COMMENT \'Type of allot\', DROP fk_allotTargetService, DROP fk_groupingService');
        $this->addSql('CREATE INDEX idx_bookingService_dateAllotType ON bookingService (startDate, endDate, allotType)');
        $this->addSql('CREATE INDEX idx_bookingService_date ON bookingService (startDate, endDate)');
    }
}
