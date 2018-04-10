<?php

namespace Application\DoctrineMigrations;

use Doctrine\DBAL\Migrations\AbstractMigration;
use Doctrine\DBAL\Schema\Schema;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
class Version20180303222758 extends AbstractMigration
{
    /**
     * @param Schema $schema
     */
    public function up(Schema $schema)
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->abortIf($this->connection->getDatabasePlatform()->getName() != 'mysql', 'Migration can only be executed safely on \'mysql\'.');

        $this->addSql('CREATE TABLE regularBooking (id INT UNSIGNED AUTO_INCREMENT NOT NULL COMMENT \'Column row identifier\', fk_booking INT UNSIGNED NOT NULL COMMENT \'Column row identifier\', insertTime DATETIME NOT NULL COMMENT \'Date and time insertion\', insertUser VARCHAR(32) NOT NULL COMMENT \'User insertion\', isEnabled TINYINT(1) DEFAULT \'0\' NOT NULL COMMENT \'Determines whether the registry is enabled\', UNIQUE INDEX UNIQ_C6B2F09CBF396750 (id), UNIQUE INDEX UNIQ_C6B2F09C1023D0F2 (fk_booking), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8 COLLATE utf8_unicode_ci ENGINE = InnoDB');
        $this->addSql('CREATE TABLE regularBookingPax (id INT UNSIGNED AUTO_INCREMENT NOT NULL COMMENT \'Column row identifier\', insertTime DATETIME NOT NULL COMMENT \'Date and time insertion\', insertUser VARCHAR(32) NOT NULL COMMENT \'User insertion\', isEnabled TINYINT(1) DEFAULT \'0\' NOT NULL COMMENT \'Determines whether the registry is enabled\', fk_bookingPax INT UNSIGNED NOT NULL COMMENT \'Column row identifier\', UNIQUE INDEX UNIQ_741F2605BF396750 (id), UNIQUE INDEX UNIQ_741F260524DA4789 (fk_bookingPax), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8 COLLATE utf8_unicode_ci ENGINE = InnoDB');
        $this->addSql('CREATE TABLE regularBookingService (id INT UNSIGNED AUTO_INCREMENT NOT NULL COMMENT \'Column row identifier\', insertTime DATETIME NOT NULL COMMENT \'Date and time insertion\', insertUser VARCHAR(32) NOT NULL COMMENT \'User insertion\', isEnabled TINYINT(1) DEFAULT \'0\' NOT NULL COMMENT \'Determines whether the registry is enabled\', fk_bookingService INT UNSIGNED NOT NULL COMMENT \'Column row identifier\', UNIQUE INDEX UNIQ_2AFB4CB1BF396750 (id), UNIQUE INDEX UNIQ_2AFB4CB1198796DA (fk_bookingService), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8 COLLATE utf8_unicode_ci ENGINE = InnoDB');
        $this->addSql('ALTER TABLE regularBooking ADD CONSTRAINT FK_C6B2F09C1023D0F2 FOREIGN KEY (fk_booking) REFERENCES booking (id) ON DELETE RESTRICT');
        $this->addSql('ALTER TABLE regularBookingPax ADD CONSTRAINT FK_741F260524DA4789 FOREIGN KEY (fk_bookingPax) REFERENCES bookingPax (id) ON DELETE RESTRICT');
        $this->addSql('ALTER TABLE regularBookingService ADD CONSTRAINT FK_2AFB4CB1198796DA FOREIGN KEY (fk_bookingService) REFERENCES bookingService (id) ON DELETE RESTRICT');
        $this->addSql('DROP TABLE basicBooking');
        $this->addSql('DROP TABLE basicBookingPax');
        $this->addSql('DROP TABLE basicBookingService');
        $this->addSql('DROP TABLE travelBooking');
        $this->addSql('DROP TABLE travelBookingPax');
        $this->addSql('DROP TABLE travelBookingService');
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
        $this->abortIf($this->connection->getDatabasePlatform()->getName() != 'mysql', 'Migration can only be executed safely on \'mysql\'.');

        $this->addSql('CREATE TABLE basicBooking (id INT UNSIGNED AUTO_INCREMENT NOT NULL COMMENT \'Column row identifier\', fk_booking INT UNSIGNED NOT NULL COMMENT \'Column row identifier\', insertTime DATETIME NOT NULL COMMENT \'Date and time insertion\', insertUser VARCHAR(32) NOT NULL COLLATE utf8_unicode_ci COMMENT \'User insertion\', isEnabled TINYINT(1) DEFAULT \'0\' NOT NULL COMMENT \'Determines whether the registry is enabled\', UNIQUE INDEX UNIQ_2FE1D800BF396750 (id), UNIQUE INDEX UNIQ_2FE1D8001023D0F2 (fk_booking), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8 COLLATE utf8_unicode_ci ENGINE = InnoDB');
        $this->addSql('CREATE TABLE basicBookingPax (id INT UNSIGNED AUTO_INCREMENT NOT NULL COMMENT \'Column row identifier\', insertTime DATETIME NOT NULL COMMENT \'Date and time insertion\', insertUser VARCHAR(32) NOT NULL COLLATE utf8_unicode_ci COMMENT \'User insertion\', isEnabled TINYINT(1) DEFAULT \'0\' NOT NULL COMMENT \'Determines whether the registry is enabled\', fk_bookingPax INT UNSIGNED NOT NULL COMMENT \'Column row identifier\', UNIQUE INDEX UNIQ_2F29C99CBF396750 (id), UNIQUE INDEX UNIQ_2F29C99C24DA4789 (fk_bookingPax), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8 COLLATE utf8_unicode_ci ENGINE = InnoDB');
        $this->addSql('CREATE TABLE basicBookingService (id INT UNSIGNED AUTO_INCREMENT NOT NULL COMMENT \'Column row identifier\', insertTime DATETIME NOT NULL COMMENT \'Date and time insertion\', insertUser VARCHAR(32) NOT NULL COLLATE utf8_unicode_ci COMMENT \'User insertion\', isEnabled TINYINT(1) DEFAULT \'0\' NOT NULL COMMENT \'Determines whether the registry is enabled\', fk_bookingService INT UNSIGNED NOT NULL COMMENT \'Column row identifier\', UNIQUE INDEX UNIQ_3DA86C0BBF396750 (id), UNIQUE INDEX UNIQ_3DA86C0B198796DA (fk_bookingService), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8 COLLATE utf8_unicode_ci ENGINE = InnoDB');
        $this->addSql('CREATE TABLE travelBooking (id INT UNSIGNED AUTO_INCREMENT NOT NULL COMMENT \'Column row identifier\', fk_booking INT UNSIGNED NOT NULL COMMENT \'Column row identifier\', insertTime DATETIME NOT NULL COMMENT \'Date and time insertion\', insertUser VARCHAR(32) NOT NULL COLLATE utf8_unicode_ci COMMENT \'User insertion\', isEnabled TINYINT(1) DEFAULT \'0\' NOT NULL COMMENT \'Determines whether the registry is enabled\', UNIQUE INDEX UNIQ_F42889FFBF396750 (id), UNIQUE INDEX UNIQ_F42889FF1023D0F2 (fk_booking), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8 COLLATE utf8_unicode_ci ENGINE = InnoDB');
        $this->addSql('CREATE TABLE travelBookingPax (id INT UNSIGNED AUTO_INCREMENT NOT NULL COMMENT \'Column row identifier\', insertTime DATETIME NOT NULL COMMENT \'Date and time insertion\', insertUser VARCHAR(32) NOT NULL COLLATE utf8_unicode_ci COMMENT \'User insertion\', isEnabled TINYINT(1) DEFAULT \'0\' NOT NULL COMMENT \'Determines whether the registry is enabled\', fk_bookingPax INT UNSIGNED NOT NULL COMMENT \'Column row identifier\', UNIQUE INDEX UNIQ_D0A9EBABBF396750 (id), UNIQUE INDEX UNIQ_D0A9EBAB24DA4789 (fk_bookingPax), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8 COLLATE utf8_unicode_ci ENGINE = InnoDB');
        $this->addSql('CREATE TABLE travelBookingService (id INT UNSIGNED AUTO_INCREMENT NOT NULL COMMENT \'Column row identifier\', insertTime DATETIME NOT NULL COMMENT \'Date and time insertion\', insertUser VARCHAR(32) NOT NULL COLLATE utf8_unicode_ci COMMENT \'User insertion\', isEnabled TINYINT(1) DEFAULT \'0\' NOT NULL COMMENT \'Determines whether the registry is enabled\', fk_bookingService INT UNSIGNED NOT NULL COMMENT \'Column row identifier\', UNIQUE INDEX UNIQ_7D1C495BBF396750 (id), UNIQUE INDEX UNIQ_7D1C495B198796DA (fk_bookingService), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8 COLLATE utf8_unicode_ci ENGINE = InnoDB');
        $this->addSql('ALTER TABLE basicBooking ADD CONSTRAINT FK_2FE1D8001023D0F2 FOREIGN KEY (fk_booking) REFERENCES booking (id)');
        $this->addSql('ALTER TABLE basicBookingPax ADD CONSTRAINT FK_2F29C99C24DA4789 FOREIGN KEY (fk_bookingPax) REFERENCES bookingPax (id)');
        $this->addSql('ALTER TABLE basicBookingService ADD CONSTRAINT FK_3DA86C0B198796DA FOREIGN KEY (fk_bookingService) REFERENCES bookingService (id)');
        $this->addSql('ALTER TABLE travelBooking ADD CONSTRAINT FK_F42889FF1023D0F2 FOREIGN KEY (fk_booking) REFERENCES booking (id)');
        $this->addSql('ALTER TABLE travelBookingPax ADD CONSTRAINT FK_D0A9EBAB24DA4789 FOREIGN KEY (fk_bookingPax) REFERENCES bookingPax (id)');
        $this->addSql('ALTER TABLE travelBookingService ADD CONSTRAINT FK_7D1C495B198796DA FOREIGN KEY (fk_bookingService) REFERENCES bookingService (id)');
        $this->addSql('DROP TABLE regularBooking');
        $this->addSql('DROP TABLE regularBookingPax');
        $this->addSql('DROP TABLE regularBookingService');
        $this->addSql('ALTER TABLE bookingService DROP FOREIGN KEY FK_6C897F337152FE24');
        $this->addSql('DROP INDEX IDX_6C897F337152FE24 ON bookingService');
        $this->addSql('ALTER TABLE bookingService DROP fk_grouperBookingServicePrice');
    }
}
