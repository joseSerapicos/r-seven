<?php

namespace Application\DoctrineMigrations;

use Doctrine\DBAL\Migrations\AbstractMigration;
use Doctrine\DBAL\Schema\Schema;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
class Version20170301005438 extends AbstractMigration
{
    /**
     * @param Schema $schema
     */
    public function up(Schema $schema)
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->abortIf($this->connection->getDatabasePlatform()->getName() != 'mysql', 'Migration can only be executed safely on \'mysql\'.');

        $this->addSql('ALTER TABLE booking ADD totalMargin NUMERIC(10, 4) DEFAULT \'0\' NOT NULL COMMENT \'Total margin\', ADD totalMarkup NUMERIC(10, 4) DEFAULT \'0\' NOT NULL COMMENT \'Total markup\', ADD totalProfit NUMERIC(10, 2) DEFAULT \'0\' NOT NULL COMMENT \'Total profit\'');
        $this->addSql('ALTER TABLE bookingService ADD totalMargin NUMERIC(10, 4) DEFAULT \'0\' NOT NULL COMMENT \'Total margin\', ADD totalMarkup NUMERIC(10, 4) DEFAULT \'0\' NOT NULL COMMENT \'Total markup\', ADD totalProfit NUMERIC(10, 2) DEFAULT \'0\' NOT NULL COMMENT \'Total profit\'');
        $this->addSql('ALTER TABLE bookingServicePrice ADD totalMargin NUMERIC(10, 4) DEFAULT \'0\' NOT NULL COMMENT \'Total margin\', ADD totalMarkup NUMERIC(10, 4) DEFAULT \'0\' NOT NULL COMMENT \'Total markup\', ADD totalProfit NUMERIC(10, 2) DEFAULT \'0\' NOT NULL COMMENT \'Total profit\'');
    }

    /**
     * @param Schema $schema
     */
    public function down(Schema $schema)
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->abortIf($this->connection->getDatabasePlatform()->getName() != 'mysql', 'Migration can only be executed safely on \'mysql\'.');

        $this->addSql('ALTER TABLE booking DROP totalMargin, DROP totalMarkup, DROP totalProfit');
        $this->addSql('ALTER TABLE bookingService DROP totalMargin, DROP totalMarkup, DROP totalProfit');
        $this->addSql('ALTER TABLE bookingServicePrice DROP totalMargin, DROP totalMarkup, DROP totalProfit');
    }
}
