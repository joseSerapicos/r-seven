<?php

namespace Application\DoctrineMigrations;

use Doctrine\DBAL\Migrations\AbstractMigration;
use Doctrine\DBAL\Schema\Schema;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
class Version20180225154211 extends AbstractMigration
{
    /**
     * @param Schema $schema
     */
    public function up(Schema $schema)
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->abortIf($this->connection->getDatabasePlatform()->getName() != 'mysql', 'Migration can only be executed safely on \'mysql\'.');

        $this->addSql('ALTER TABLE serviceAllot CHANGE allot allot SMALLINT UNSIGNED NOT NULL COMMENT \'Allot\'');
        $this->addSql('ALTER TABLE packageServiceService ADD fk_place INT UNSIGNED DEFAULT NULL COMMENT \'Column row identifier\', ADD hasQuantityEdition TINYINT(1) DEFAULT \'0\' NOT NULL COMMENT \'Define if quantity can be changed by the user\', ADD fk_placeTo INT UNSIGNED DEFAULT NULL COMMENT \'Column row identifier\'');
        $this->addSql('ALTER TABLE packageServiceService ADD CONSTRAINT FK_4525818DB5F070B8 FOREIGN KEY (fk_place) REFERENCES place (id) ON DELETE RESTRICT');
        $this->addSql('ALTER TABLE packageServiceService ADD CONSTRAINT FK_4525818D3E1A161A FOREIGN KEY (fk_placeTo) REFERENCES place (id) ON DELETE RESTRICT');
        $this->addSql('CREATE INDEX IDX_4525818DB5F070B8 ON packageServiceService (fk_place)');
        $this->addSql('CREATE INDEX IDX_4525818D3E1A161A ON packageServiceService (fk_placeTo)');
        $this->addSql('ALTER TABLE bookingService ADD groupingTotalVatSell NUMERIC(10, 2) DEFAULT \'0\' NOT NULL COMMENT \'Grouping total VAT of sell value\'');
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

        $this->addSql('ALTER TABLE bookingService DROP groupingTotalVatSell');
        $this->addSql('ALTER TABLE packageBookingService ADD fk_place INT UNSIGNED DEFAULT NULL COMMENT \'Column row identifier\', ADD fk_placeTo INT UNSIGNED DEFAULT NULL COMMENT \'Column row identifier\'');
        $this->addSql('ALTER TABLE packageBookingService ADD CONSTRAINT FK_C078BF453E1A161A FOREIGN KEY (fk_placeTo) REFERENCES place (id)');
        $this->addSql('ALTER TABLE packageBookingService ADD CONSTRAINT FK_C078BF45B5F070B8 FOREIGN KEY (fk_place) REFERENCES place (id)');
        $this->addSql('CREATE INDEX IDX_C078BF45B5F070B8 ON packageBookingService (fk_place)');
        $this->addSql('CREATE INDEX IDX_C078BF453E1A161A ON packageBookingService (fk_placeTo)');
        $this->addSql('ALTER TABLE packageServiceService DROP FOREIGN KEY FK_4525818DB5F070B8');
        $this->addSql('ALTER TABLE packageServiceService DROP FOREIGN KEY FK_4525818D3E1A161A');
        $this->addSql('DROP INDEX IDX_4525818DB5F070B8 ON packageServiceService');
        $this->addSql('DROP INDEX IDX_4525818D3E1A161A ON packageServiceService');
        $this->addSql('ALTER TABLE packageServiceService DROP fk_place, DROP hasQuantityEdition, DROP fk_placeTo');
        $this->addSql('ALTER TABLE serviceAllot CHANGE allot allot SMALLINT UNSIGNED NOT NULL COMMENT \'Allot/Allot\'');
    }
}
