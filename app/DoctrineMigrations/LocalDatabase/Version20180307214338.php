<?php

namespace Application\DoctrineMigrations;

use Doctrine\DBAL\Migrations\AbstractMigration;
use Doctrine\DBAL\Schema\Schema;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
class Version20180307214338 extends AbstractMigration
{
    /**
     * @param Schema $schema
     */
    public function up(Schema $schema)
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->abortIf($this->connection->getDatabasePlatform()->getName() != 'mysql', 'Migration can only be executed safely on \'mysql\'.');

        $this->addSql('ALTER TABLE bookingServicePrice ADD fk_groupedBookingServicePrice INT UNSIGNED DEFAULT NULL COMMENT \'Column row identifier\'');
        $this->addSql('ALTER TABLE bookingServicePrice ADD CONSTRAINT FK_F9787BE515B7C8D4 FOREIGN KEY (fk_groupedBookingServicePrice) REFERENCES bookingServicePrice (id) ON DELETE CASCADE');
        $this->addSql('CREATE INDEX IDX_F9787BE515B7C8D4 ON bookingServicePrice (fk_groupedBookingServicePrice)');
    }

    /**
     * @param Schema $schema
     */
    public function down(Schema $schema)
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->abortIf($this->connection->getDatabasePlatform()->getName() != 'mysql', 'Migration can only be executed safely on \'mysql\'.');

        $this->addSql('ALTER TABLE bookingServicePrice DROP FOREIGN KEY FK_F9787BE515B7C8D4');
        $this->addSql('DROP INDEX IDX_F9787BE515B7C8D4 ON bookingServicePrice');
        $this->addSql('ALTER TABLE bookingServicePrice DROP fk_groupedBookingServicePrice');
    }
}
