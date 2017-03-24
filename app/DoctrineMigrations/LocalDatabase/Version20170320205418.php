<?php

namespace Application\DoctrineMigrations;

use Doctrine\DBAL\Migrations\AbstractMigration;
use Doctrine\DBAL\Schema\Schema;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
class Version20170320205418 extends AbstractMigration
{
    /**
     * @param Schema $schema
     */
    public function up(Schema $schema)
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->abortIf($this->connection->getDatabasePlatform()->getName() != 'mysql', 'Migration can only be executed safely on \'mysql\'.');

        $this->addSql('CREATE TABLE serviceBooking (id INT UNSIGNED AUTO_INCREMENT NOT NULL COMMENT \'Column row identifier\', fk_store INT UNSIGNED NOT NULL COMMENT \'Column row identifier\', fk_user INT UNSIGNED DEFAULT NULL COMMENT \'Column row identifier\', fk_client INT UNSIGNED NOT NULL COMMENT \'Column row identifier\', code VARCHAR(24) NOT NULL COMMENT \'Code\', startDate DATE DEFAULT NULL COMMENT \'Start date of booking\', endDate DATE DEFAULT NULL COMMENT \'End date of booking\', invoiceStatus VARCHAR(8) DEFAULT \'NO\' NOT NULL COMMENT \'Invoice status\', confirmationStatus VARCHAR(8) DEFAULT \'NO\' NOT NULL COMMENT \'Confirmation status\', totalCost NUMERIC(10, 2) DEFAULT \'0\' NOT NULL COMMENT \'Total cost value\', totalMargin NUMERIC(10, 2) DEFAULT \'0\' NOT NULL COMMENT \'Total margin\', totalMarkup NUMERIC(10, 2) DEFAULT \'0\' NOT NULL COMMENT \'Total markup\', totalProfit NUMERIC(10, 2) DEFAULT \'0\' NOT NULL COMMENT \'Total profit\', totalSell NUMERIC(10, 2) DEFAULT \'0\' NOT NULL COMMENT \'Total sell value\', insertTime DATETIME NOT NULL COMMENT \'Date and time insertion\', insertUser VARCHAR(32) NOT NULL COMMENT \'User insertion\', isEnabled TINYINT(1) DEFAULT \'0\' NOT NULL COMMENT \'Determines whether the registry is enabled\', fk_bookingPax INT UNSIGNED DEFAULT NULL COMMENT \'Column row identifier\', UNIQUE INDEX UNIQ_E84536F777153098 (code), UNIQUE INDEX UNIQ_E84536F7BF396750 (id), INDEX IDX_E84536F73EBA7B02 (fk_store), INDEX IDX_E84536F71AD0877 (fk_user), INDEX IDX_E84536F7E7EA6CC5 (fk_client), INDEX IDX_E84536F724DA4789 (fk_bookingPax), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8 COLLATE utf8_unicode_ci ENGINE = InnoDB');
        $this->addSql('ALTER TABLE serviceBooking ADD CONSTRAINT FK_E84536F73EBA7B02 FOREIGN KEY (fk_store) REFERENCES store (id) ON DELETE RESTRICT');
        $this->addSql('ALTER TABLE serviceBooking ADD CONSTRAINT FK_E84536F71AD0877 FOREIGN KEY (fk_user) REFERENCES user (id) ON DELETE SET NULL');
        $this->addSql('ALTER TABLE serviceBooking ADD CONSTRAINT FK_E84536F7E7EA6CC5 FOREIGN KEY (fk_client) REFERENCES client (id) ON DELETE RESTRICT');
        $this->addSql('ALTER TABLE serviceBooking ADD CONSTRAINT FK_E84536F724DA4789 FOREIGN KEY (fk_bookingPax) REFERENCES bookingPax (id) ON DELETE SET NULL');
    }

    /**
     * @param Schema $schema
     */
    public function down(Schema $schema)
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->abortIf($this->connection->getDatabasePlatform()->getName() != 'mysql', 'Migration can only be executed safely on \'mysql\'.');

        $this->addSql('DROP TABLE serviceBooking');
    }
}
