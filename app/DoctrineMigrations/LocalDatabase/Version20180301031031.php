<?php

namespace Application\DoctrineMigrations;

use Doctrine\DBAL\Migrations\AbstractMigration;
use Doctrine\DBAL\Schema\Schema;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
class Version20180301031031 extends AbstractMigration
{
    /**
     * @param Schema $schema
     */
    public function up(Schema $schema)
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->abortIf($this->connection->getDatabasePlatform()->getName() != 'mysql', 'Migration can only be executed safely on \'mysql\'.');

        $this->addSql('ALTER TABLE bookingService ADD fk_place INT UNSIGNED DEFAULT NULL COMMENT \'Column row identifier\', ADD fk_placeTo INT UNSIGNED DEFAULT NULL COMMENT \'Column row identifier\'');
        $this->addSql('ALTER TABLE bookingService ADD CONSTRAINT FK_6C897F33B5F070B8 FOREIGN KEY (fk_place) REFERENCES place (id) ON DELETE RESTRICT');
        $this->addSql('ALTER TABLE bookingService ADD CONSTRAINT FK_6C897F333E1A161A FOREIGN KEY (fk_placeTo) REFERENCES place (id) ON DELETE RESTRICT');
        $this->addSql('CREATE INDEX IDX_6C897F33B5F070B8 ON bookingService (fk_place)');
        $this->addSql('CREATE INDEX IDX_6C897F333E1A161A ON bookingService (fk_placeTo)');
        $this->addSql('ALTER TABLE packageBooking DROP FOREIGN KEY FK_E879401D3E1A161A');
        $this->addSql('ALTER TABLE packageBooking DROP FOREIGN KEY FK_E879401DB5F070B8');
        $this->addSql('DROP INDEX IDX_E879401DB5F070B8 ON packageBooking');
        $this->addSql('DROP INDEX IDX_E879401D3E1A161A ON packageBooking');
        $this->addSql('ALTER TABLE packageBooking DROP fk_place, DROP fk_placeTo');
        $this->addSql('ALTER TABLE travelBooking DROP FOREIGN KEY FK_F42889FF3E1A161A');
        $this->addSql('ALTER TABLE travelBooking DROP FOREIGN KEY FK_F42889FFB5F070B8');
        $this->addSql('DROP INDEX IDX_F42889FFB5F070B8 ON travelBooking');
        $this->addSql('DROP INDEX IDX_F42889FF3E1A161A ON travelBooking');
        $this->addSql('ALTER TABLE travelBooking DROP fk_place, DROP fk_placeTo');
        $this->addSql('ALTER TABLE travelBookingService DROP FOREIGN KEY FK_7D1C495B3E1A161A');
        $this->addSql('ALTER TABLE travelBookingService DROP FOREIGN KEY FK_7D1C495BB5F070B8');
        $this->addSql('DROP INDEX IDX_7D1C495BB5F070B8 ON travelBookingService');
        $this->addSql('DROP INDEX IDX_7D1C495B3E1A161A ON travelBookingService');
        $this->addSql('ALTER TABLE travelBookingService DROP fk_place, DROP fk_placeTo');
        $this->addSql('ALTER TABLE booking ADD fk_place INT UNSIGNED DEFAULT NULL COMMENT \'Column row identifier\', ADD fk_placeTo INT UNSIGNED DEFAULT NULL COMMENT \'Column row identifier\'');
        $this->addSql('ALTER TABLE booking ADD CONSTRAINT FK_E00CEDDEB5F070B8 FOREIGN KEY (fk_place) REFERENCES place (id) ON DELETE SET NULL');
        $this->addSql('ALTER TABLE booking ADD CONSTRAINT FK_E00CEDDE3E1A161A FOREIGN KEY (fk_placeTo) REFERENCES place (id) ON DELETE SET NULL');
        $this->addSql('CREATE INDEX IDX_E00CEDDEB5F070B8 ON booking (fk_place)');
        $this->addSql('CREATE INDEX IDX_E00CEDDE3E1A161A ON booking (fk_placeTo)');
        $this->addSql('ALTER TABLE packageBookingService DROP FOREIGN KEY FK_C078BF453E1A161A');
        $this->addSql('ALTER TABLE packageBookingService DROP FOREIGN KEY FK_C078BF45B5F070B8');
        $this->addSql('DROP INDEX IDX_C078BF45B5F070B8 ON packageBookingService');
        $this->addSql('DROP INDEX IDX_C078BF453E1A161A ON packageBookingService');
        $this->addSql('ALTER TABLE packageBookingService DROP fk_place, DROP fk_placeTo');
    }

    /**
     * @param Schema $schema
     */
    public function down(Schema $schema)
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->abortIf($this->connection->getDatabasePlatform()->getName() != 'mysql', 'Migration can only be executed safely on \'mysql\'.');

        $this->addSql('ALTER TABLE booking DROP FOREIGN KEY FK_E00CEDDEB5F070B8');
        $this->addSql('ALTER TABLE booking DROP FOREIGN KEY FK_E00CEDDE3E1A161A');
        $this->addSql('DROP INDEX IDX_E00CEDDEB5F070B8 ON booking');
        $this->addSql('DROP INDEX IDX_E00CEDDE3E1A161A ON booking');
        $this->addSql('ALTER TABLE booking DROP fk_place, DROP fk_placeTo');
        $this->addSql('ALTER TABLE bookingService DROP FOREIGN KEY FK_6C897F33B5F070B8');
        $this->addSql('ALTER TABLE bookingService DROP FOREIGN KEY FK_6C897F333E1A161A');
        $this->addSql('DROP INDEX IDX_6C897F33B5F070B8 ON bookingService');
        $this->addSql('DROP INDEX IDX_6C897F333E1A161A ON bookingService');
        $this->addSql('ALTER TABLE bookingService DROP fk_place, DROP fk_placeTo');
        $this->addSql('ALTER TABLE packageBooking ADD fk_place INT UNSIGNED DEFAULT NULL COMMENT \'Column row identifier\', ADD fk_placeTo INT UNSIGNED DEFAULT NULL COMMENT \'Column row identifier\'');
        $this->addSql('ALTER TABLE packageBooking ADD CONSTRAINT FK_E879401D3E1A161A FOREIGN KEY (fk_placeTo) REFERENCES place (id) ON DELETE SET NULL');
        $this->addSql('ALTER TABLE packageBooking ADD CONSTRAINT FK_E879401DB5F070B8 FOREIGN KEY (fk_place) REFERENCES place (id) ON DELETE SET NULL');
        $this->addSql('CREATE INDEX IDX_E879401DB5F070B8 ON packageBooking (fk_place)');
        $this->addSql('CREATE INDEX IDX_E879401D3E1A161A ON packageBooking (fk_placeTo)');
        $this->addSql('ALTER TABLE packageBookingService ADD fk_place INT UNSIGNED DEFAULT NULL COMMENT \'Column row identifier\', ADD fk_placeTo INT UNSIGNED DEFAULT NULL COMMENT \'Column row identifier\'');
        $this->addSql('ALTER TABLE packageBookingService ADD CONSTRAINT FK_C078BF453E1A161A FOREIGN KEY (fk_placeTo) REFERENCES place (id)');
        $this->addSql('ALTER TABLE packageBookingService ADD CONSTRAINT FK_C078BF45B5F070B8 FOREIGN KEY (fk_place) REFERENCES place (id)');
        $this->addSql('CREATE INDEX IDX_C078BF45B5F070B8 ON packageBookingService (fk_place)');
        $this->addSql('CREATE INDEX IDX_C078BF453E1A161A ON packageBookingService (fk_placeTo)');
        $this->addSql('ALTER TABLE travelBooking ADD fk_place INT UNSIGNED DEFAULT NULL COMMENT \'Column row identifier\', ADD fk_placeTo INT UNSIGNED DEFAULT NULL COMMENT \'Column row identifier\'');
        $this->addSql('ALTER TABLE travelBooking ADD CONSTRAINT FK_F42889FF3E1A161A FOREIGN KEY (fk_placeTo) REFERENCES place (id) ON DELETE SET NULL');
        $this->addSql('ALTER TABLE travelBooking ADD CONSTRAINT FK_F42889FFB5F070B8 FOREIGN KEY (fk_place) REFERENCES place (id) ON DELETE SET NULL');
        $this->addSql('CREATE INDEX IDX_F42889FFB5F070B8 ON travelBooking (fk_place)');
        $this->addSql('CREATE INDEX IDX_F42889FF3E1A161A ON travelBooking (fk_placeTo)');
        $this->addSql('ALTER TABLE travelBookingService ADD fk_place INT UNSIGNED DEFAULT NULL COMMENT \'Column row identifier\', ADD fk_placeTo INT UNSIGNED DEFAULT NULL COMMENT \'Column row identifier\'');
        $this->addSql('ALTER TABLE travelBookingService ADD CONSTRAINT FK_7D1C495B3E1A161A FOREIGN KEY (fk_placeTo) REFERENCES place (id)');
        $this->addSql('ALTER TABLE travelBookingService ADD CONSTRAINT FK_7D1C495BB5F070B8 FOREIGN KEY (fk_place) REFERENCES place (id)');
        $this->addSql('CREATE INDEX IDX_7D1C495BB5F070B8 ON travelBookingService (fk_place)');
        $this->addSql('CREATE INDEX IDX_7D1C495B3E1A161A ON travelBookingService (fk_placeTo)');
    }
}
