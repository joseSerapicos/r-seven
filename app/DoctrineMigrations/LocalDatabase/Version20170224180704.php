<?php

namespace Application\DoctrineMigrations;

use Doctrine\DBAL\Migrations\AbstractMigration;
use Doctrine\DBAL\Schema\Schema;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
class Version20170224180704 extends AbstractMigration
{
    /**
     * @param Schema $schema
     */
    public function up(Schema $schema)
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->abortIf($this->connection->getDatabasePlatform()->getName() != 'mysql', 'Migration can only be executed safely on \'mysql\'.');

        $this->addSql('ALTER TABLE servicePrice CHANGE sellValue sellValue NUMERIC(10, 4) DEFAULT \'0\' NOT NULL COMMENT \'Sell value\'');
        $this->addSql('ALTER TABLE bookingServicePrice CHANGE totalCostValue totalCostValue NUMERIC(10, 2) DEFAULT \'0\' NOT NULL COMMENT \'Total cost value\', CHANGE sellValue sellValue NUMERIC(10, 4) DEFAULT \'0\' NOT NULL COMMENT \'Sell value\'');
    }

    /**
     * @param Schema $schema
     */
    public function down(Schema $schema)
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->abortIf($this->connection->getDatabasePlatform()->getName() != 'mysql', 'Migration can only be executed safely on \'mysql\'.');

        $this->addSql('ALTER TABLE bookingServicePrice CHANGE totalCostValue totalCostValue NUMERIC(10, 4) DEFAULT \'0.0000\' NOT NULL COMMENT \'Total cost value\', CHANGE sellValue sellValue NUMERIC(10, 2) DEFAULT \'0.00\' NOT NULL COMMENT \'Sell value\'');
        $this->addSql('ALTER TABLE servicePrice CHANGE sellValue sellValue NUMERIC(10, 2) DEFAULT \'0.00\' NOT NULL COMMENT \'Sell value\'');
    }
}
