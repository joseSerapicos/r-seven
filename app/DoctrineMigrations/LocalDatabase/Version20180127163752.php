<?php

namespace Application\DoctrineMigrations;

use Doctrine\DBAL\Migrations\AbstractMigration;
use Doctrine\DBAL\Schema\Schema;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
class Version20180127163752 extends AbstractMigration
{
    /**
     * @param Schema $schema
     */
    public function up(Schema $schema)
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->abortIf($this->connection->getDatabasePlatform()->getName() != 'mysql', 'Migration can only be executed safely on \'mysql\'.');

        $this->addSql('CREATE TABLE packageBooking (id INT UNSIGNED AUTO_INCREMENT NOT NULL COMMENT \'Column row identifier\', fk_booking INT UNSIGNED NOT NULL COMMENT \'Column row identifier\', fk_place INT UNSIGNED DEFAULT NULL COMMENT \'Column row identifier\', insertTime DATETIME NOT NULL COMMENT \'Date and time insertion\', insertUser VARCHAR(32) NOT NULL COMMENT \'User insertion\', isEnabled TINYINT(1) DEFAULT \'0\' NOT NULL COMMENT \'Determines whether the registry is enabled\', fk_placeTo INT UNSIGNED DEFAULT NULL COMMENT \'Column row identifier\', UNIQUE INDEX UNIQ_E879401DBF396750 (id), UNIQUE INDEX UNIQ_E879401D1023D0F2 (fk_booking), INDEX IDX_E879401DB5F070B8 (fk_place), INDEX IDX_E879401D3E1A161A (fk_placeTo), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8 COLLATE utf8_unicode_ci ENGINE = InnoDB');
        $this->addSql('CREATE TABLE packageBookingPax (id INT UNSIGNED AUTO_INCREMENT NOT NULL COMMENT \'Column row identifier\', insertTime DATETIME NOT NULL COMMENT \'Date and time insertion\', insertUser VARCHAR(32) NOT NULL COMMENT \'User insertion\', isEnabled TINYINT(1) DEFAULT \'0\' NOT NULL COMMENT \'Determines whether the registry is enabled\', fk_bookingPax INT UNSIGNED NOT NULL COMMENT \'Column row identifier\', UNIQUE INDEX UNIQ_7C9BE21CBF396750 (id), UNIQUE INDEX UNIQ_7C9BE21C24DA4789 (fk_bookingPax), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8 COLLATE utf8_unicode_ci ENGINE = InnoDB');
        $this->addSql('CREATE TABLE packageBookingService (id INT UNSIGNED AUTO_INCREMENT NOT NULL COMMENT \'Column row identifier\', fk_place INT UNSIGNED DEFAULT NULL COMMENT \'Column row identifier\', insertTime DATETIME NOT NULL COMMENT \'Date and time insertion\', insertUser VARCHAR(32) NOT NULL COMMENT \'User insertion\', isEnabled TINYINT(1) DEFAULT \'0\' NOT NULL COMMENT \'Determines whether the registry is enabled\', fk_bookingService INT UNSIGNED NOT NULL COMMENT \'Column row identifier\', fk_placeTo INT UNSIGNED DEFAULT NULL COMMENT \'Column row identifier\', UNIQUE INDEX UNIQ_C078BF45BF396750 (id), UNIQUE INDEX UNIQ_C078BF45198796DA (fk_bookingService), INDEX IDX_C078BF45B5F070B8 (fk_place), INDEX IDX_C078BF453E1A161A (fk_placeTo), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8 COLLATE utf8_unicode_ci ENGINE = InnoDB');
        $this->addSql('ALTER TABLE packageBooking ADD CONSTRAINT FK_E879401D1023D0F2 FOREIGN KEY (fk_booking) REFERENCES booking (id) ON DELETE RESTRICT');
        $this->addSql('ALTER TABLE packageBooking ADD CONSTRAINT FK_E879401DB5F070B8 FOREIGN KEY (fk_place) REFERENCES place (id) ON DELETE SET NULL');
        $this->addSql('ALTER TABLE packageBooking ADD CONSTRAINT FK_E879401D3E1A161A FOREIGN KEY (fk_placeTo) REFERENCES place (id) ON DELETE SET NULL');
        $this->addSql('ALTER TABLE packageBookingPax ADD CONSTRAINT FK_7C9BE21C24DA4789 FOREIGN KEY (fk_bookingPax) REFERENCES bookingPax (id) ON DELETE RESTRICT');
        $this->addSql('ALTER TABLE packageBookingService ADD CONSTRAINT FK_C078BF45198796DA FOREIGN KEY (fk_bookingService) REFERENCES bookingService (id) ON DELETE RESTRICT');
        $this->addSql('ALTER TABLE packageBookingService ADD CONSTRAINT FK_C078BF45B5F070B8 FOREIGN KEY (fk_place) REFERENCES place (id) ON DELETE RESTRICT');
        $this->addSql('ALTER TABLE packageBookingService ADD CONSTRAINT FK_C078BF453E1A161A FOREIGN KEY (fk_placeTo) REFERENCES place (id) ON DELETE RESTRICT');
        $this->addSql('DROP TABLE basicBookingServicePrice');
        $this->addSql('DROP TABLE travelBookingServicePrice');
    }

    /**
     * @param Schema $schema
     */
    public function down(Schema $schema)
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->abortIf($this->connection->getDatabasePlatform()->getName() != 'mysql', 'Migration can only be executed safely on \'mysql\'.');

        $this->addSql('CREATE TABLE basicBookingServicePrice (id INT UNSIGNED AUTO_INCREMENT NOT NULL COMMENT \'Column row identifier\', insertTime DATETIME NOT NULL COMMENT \'Date and time insertion\', insertUser VARCHAR(32) NOT NULL COLLATE utf8_unicode_ci COMMENT \'User insertion\', isEnabled TINYINT(1) DEFAULT \'0\' NOT NULL COMMENT \'Determines whether the registry is enabled\', fk_bookingServicePrice INT UNSIGNED NOT NULL COMMENT \'Column row identifier\', UNIQUE INDEX UNIQ_B0AA3011BF396750 (id), UNIQUE INDEX UNIQ_B0AA30112F1D7040 (fk_bookingServicePrice), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8 COLLATE utf8_unicode_ci ENGINE = InnoDB');
        $this->addSql('CREATE TABLE travelBookingServicePrice (id INT UNSIGNED AUTO_INCREMENT NOT NULL COMMENT \'Column row identifier\', insertTime DATETIME NOT NULL COMMENT \'Date and time insertion\', insertUser VARCHAR(32) NOT NULL COLLATE utf8_unicode_ci COMMENT \'User insertion\', isEnabled TINYINT(1) DEFAULT \'0\' NOT NULL COMMENT \'Determines whether the registry is enabled\', fk_bookingServicePrice INT UNSIGNED NOT NULL COMMENT \'Column row identifier\', UNIQUE INDEX UNIQ_2D7BB91FBF396750 (id), UNIQUE INDEX UNIQ_2D7BB91F2F1D7040 (fk_bookingServicePrice), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8 COLLATE utf8_unicode_ci ENGINE = InnoDB');
        $this->addSql('ALTER TABLE basicBookingServicePrice ADD CONSTRAINT FK_B0AA30112F1D7040 FOREIGN KEY (fk_bookingServicePrice) REFERENCES bookingServicePrice (id)');
        $this->addSql('ALTER TABLE travelBookingServicePrice ADD CONSTRAINT FK_2D7BB91F2F1D7040 FOREIGN KEY (fk_bookingServicePrice) REFERENCES bookingServicePrice (id)');
        $this->addSql('DROP TABLE packageBooking');
        $this->addSql('DROP TABLE packageBookingPax');
        $this->addSql('DROP TABLE packageBookingService');
    }
}
