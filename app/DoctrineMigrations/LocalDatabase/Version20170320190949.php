<?php

namespace Application\DoctrineMigrations;

use Doctrine\DBAL\Migrations\AbstractMigration;
use Doctrine\DBAL\Schema\Schema;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
class Version20170320190949 extends AbstractMigration
{
    /**
     * @param Schema $schema
     */
    public function up(Schema $schema)
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->abortIf($this->connection->getDatabasePlatform()->getName() != 'mysql', 'Migration can only be executed safely on \'mysql\'.');

        $this->addSql('CREATE TABLE bookingTravelService (id INT UNSIGNED AUTO_INCREMENT NOT NULL COMMENT \'Column row identifier\', fk_place INT UNSIGNED DEFAULT NULL COMMENT \'Column row identifier\', insertTime DATETIME NOT NULL COMMENT \'Date and time insertion\', insertUser VARCHAR(32) NOT NULL COMMENT \'User insertion\', isEnabled TINYINT(1) DEFAULT \'0\' NOT NULL COMMENT \'Determines whether the registry is enabled\', fk_bookingService INT UNSIGNED NOT NULL COMMENT \'Column row identifier\', fk_placeTo INT UNSIGNED DEFAULT NULL COMMENT \'Column row identifier\', UNIQUE INDEX UNIQ_FE033660BF396750 (id), UNIQUE INDEX UNIQ_FE033660198796DA (fk_bookingService), INDEX IDX_FE033660B5F070B8 (fk_place), INDEX IDX_FE0336603E1A161A (fk_placeTo), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8 COLLATE utf8_unicode_ci ENGINE = InnoDB');
        $this->addSql('ALTER TABLE bookingTravelService ADD CONSTRAINT FK_FE033660198796DA FOREIGN KEY (fk_bookingService) REFERENCES bookingService (id) ON DELETE CASCADE');
        $this->addSql('ALTER TABLE bookingTravelService ADD CONSTRAINT FK_FE033660B5F070B8 FOREIGN KEY (fk_place) REFERENCES place (id) ON DELETE RESTRICT');
        $this->addSql('ALTER TABLE bookingTravelService ADD CONSTRAINT FK_FE0336603E1A161A FOREIGN KEY (fk_placeTo) REFERENCES place (id) ON DELETE RESTRICT');
        $this->addSql('DROP TABLE travelBookingService');
    }

    /**
     * @param Schema $schema
     */
    public function down(Schema $schema)
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->abortIf($this->connection->getDatabasePlatform()->getName() != 'mysql', 'Migration can only be executed safely on \'mysql\'.');

        $this->addSql('CREATE TABLE travelBookingService (id INT UNSIGNED AUTO_INCREMENT NOT NULL COMMENT \'Column row identifier\', fk_place INT UNSIGNED DEFAULT NULL COMMENT \'Column row identifier\', insertTime DATETIME NOT NULL COMMENT \'Date and time insertion\', insertUser VARCHAR(32) NOT NULL COLLATE utf8_unicode_ci COMMENT \'User insertion\', isEnabled TINYINT(1) DEFAULT \'0\' NOT NULL COMMENT \'Determines whether the registry is enabled\', fk_bookingService INT UNSIGNED NOT NULL COMMENT \'Column row identifier\', fk_placeTo INT UNSIGNED DEFAULT NULL COMMENT \'Column row identifier\', UNIQUE INDEX UNIQ_7D1C495BBF396750 (id), UNIQUE INDEX UNIQ_7D1C495B198796DA (fk_bookingService), INDEX IDX_7D1C495BB5F070B8 (fk_place), INDEX IDX_7D1C495B3E1A161A (fk_placeTo), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8 COLLATE utf8_unicode_ci ENGINE = InnoDB');
        $this->addSql('ALTER TABLE travelBookingService ADD CONSTRAINT FK_7D1C495B198796DA FOREIGN KEY (fk_bookingService) REFERENCES bookingService (id) ON DELETE CASCADE');
        $this->addSql('ALTER TABLE travelBookingService ADD CONSTRAINT FK_7D1C495B3E1A161A FOREIGN KEY (fk_placeTo) REFERENCES place (id)');
        $this->addSql('ALTER TABLE travelBookingService ADD CONSTRAINT FK_7D1C495BB5F070B8 FOREIGN KEY (fk_place) REFERENCES place (id)');
        $this->addSql('DROP TABLE bookingTravelService');
    }
}
