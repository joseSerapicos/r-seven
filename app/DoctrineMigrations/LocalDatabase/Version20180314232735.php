<?php

namespace Application\DoctrineMigrations;

use Doctrine\DBAL\Migrations\AbstractMigration;
use Doctrine\DBAL\Schema\Schema;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
class Version20180314232735 extends AbstractMigration
{
    /**
     * @param Schema $schema
     */
    public function up(Schema $schema)
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->abortIf($this->connection->getDatabasePlatform()->getName() !== 'mysql', 'Migration can only be executed safely on \'mysql\'.');

        $this->addSql('ALTER TABLE bookingService ADD fk_grouperBookingServicePrice INT UNSIGNED DEFAULT NULL COMMENT \'Column row identifier\'');
        $this->addSql('ALTER TABLE bookingService ADD CONSTRAINT FK_6C897F337152FE24 FOREIGN KEY (fk_grouperBookingServicePrice) REFERENCES bookingServicePrice (id) ON DELETE RESTRICT');
        $this->addSql('CREATE INDEX IDX_6C897F337152FE24 ON bookingService (fk_grouperBookingServicePrice)');
    }

    /**
     * @param Schema $schema
     */
    public function down(Schema $schema)
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->abortIf($this->connection->getDatabasePlatform()->getName() !== 'mysql', 'Migration can only be executed safely on \'mysql\'.');

        $this->addSql('ALTER TABLE bookingService DROP FOREIGN KEY FK_6C897F337152FE24');
        $this->addSql('DROP INDEX IDX_6C897F337152FE24 ON bookingService');
        $this->addSql('ALTER TABLE bookingService DROP fk_grouperBookingServicePrice');
    }
}
