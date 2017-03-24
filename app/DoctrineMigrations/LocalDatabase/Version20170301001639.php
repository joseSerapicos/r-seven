<?php

namespace Application\DoctrineMigrations;

use Doctrine\DBAL\Migrations\AbstractMigration;
use Doctrine\DBAL\Schema\Schema;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
class Version20170301001639 extends AbstractMigration
{
    /**
     * @param Schema $schema
     */
    public function up(Schema $schema)
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->abortIf($this->connection->getDatabasePlatform()->getName() != 'mysql', 'Migration can only be executed safely on \'mysql\'.');

        $this->addSql('ALTER TABLE booking DROP totalMargin, DROP totalMarkup, DROP totalProfit, CHANGE totalcostvalue totalCost NUMERIC(10, 4) DEFAULT \'0\' NOT NULL COMMENT \'Total cost value\', CHANGE totalsellvalue totalSell NUMERIC(10, 2) DEFAULT \'0\' NOT NULL COMMENT \'Total sell value\'');
        $this->addSql('ALTER TABLE bookingService ADD totalCost NUMERIC(10, 4) DEFAULT \'0\' NOT NULL COMMENT \'Total cost value\', ADD totalSell NUMERIC(10, 2) DEFAULT \'0\' NOT NULL COMMENT \'Total sell value\', DROP totalCostValue, DROP totalSellValue, DROP totalMargin, DROP totalMarkup, DROP totalProfit');
        $this->addSql('ALTER TABLE bookingServicePrice ADD totalCost NUMERIC(10, 4) DEFAULT \'0\' NOT NULL COMMENT \'Total cost value\', DROP totalCostValue, CHANGE totalsellvalue totalSell NUMERIC(10, 2) DEFAULT \'0\' NOT NULL COMMENT \'Total sell value\'');
    }

    /**
     * @param Schema $schema
     */
    public function down(Schema $schema)
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->abortIf($this->connection->getDatabasePlatform()->getName() != 'mysql', 'Migration can only be executed safely on \'mysql\'.');

        $this->addSql('ALTER TABLE booking ADD totalMargin NUMERIC(10, 4) DEFAULT \'0.0000\' NOT NULL COMMENT \'Total margin\', ADD totalMarkup NUMERIC(10, 4) DEFAULT \'0.0000\' NOT NULL COMMENT \'Total markup\', ADD totalProfit NUMERIC(10, 4) DEFAULT \'0.0000\' NOT NULL COMMENT \'Total profit\', CHANGE totalcost totalCostValue NUMERIC(10, 4) DEFAULT \'0.0000\' NOT NULL COMMENT \'Total cost value\', CHANGE totalsell totalSellValue NUMERIC(10, 2) DEFAULT \'0.00\' NOT NULL COMMENT \'Total sell value\'');
        $this->addSql('ALTER TABLE bookingService ADD totalCostValue NUMERIC(10, 4) DEFAULT \'0.0000\' NOT NULL COMMENT \'Total cost price\', ADD totalSellValue NUMERIC(10, 4) DEFAULT \'0.0000\' NOT NULL COMMENT \'Total sell price\', ADD totalMargin NUMERIC(10, 4) DEFAULT \'0.0000\' NOT NULL COMMENT \'Total margin\', ADD totalMarkup NUMERIC(10, 4) DEFAULT \'0.0000\' NOT NULL COMMENT \'Total markup\', ADD totalProfit NUMERIC(10, 4) DEFAULT \'0.0000\' NOT NULL COMMENT \'Total profit\', DROP totalCost, DROP totalSell');
        $this->addSql('ALTER TABLE bookingServicePrice ADD totalCostValue NUMERIC(10, 2) DEFAULT \'0.00\' NOT NULL COMMENT \'Total cost value\', DROP totalCost, CHANGE totalsell totalSellValue NUMERIC(10, 2) DEFAULT \'0.00\' NOT NULL COMMENT \'Total sell value\'');
    }
}
