<?php

namespace Application\DoctrineMigrations;

use Doctrine\DBAL\Migrations\AbstractMigration;
use Doctrine\DBAL\Schema\Schema;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
class Version20170131130303 extends AbstractMigration
{
    /**
     * @param Schema $schema
     */
    public function up(Schema $schema)
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->abortIf($this->connection->getDatabasePlatform()->getName() != 'mysql', 'Migration can only be executed safely on \'mysql\'.');

        $this->addSql('ALTER TABLE servicePriceException CHANGE costpostingmethod costMethod VARCHAR(8) NOT NULL COMMENT \'Method to use to determinate the cost\', CHANGE costpostingvalue costValue NUMERIC(10, 4) DEFAULT \'0\' NOT NULL COMMENT \'Cost value\', CHANGE sellpostingbasevalue sellBaseValue VARCHAR(10) NOT NULL COMMENT \'Determines the base value to calculate the sell price\', CHANGE sellpostingmethod sellMethod VARCHAR(8) NOT NULL COMMENT \'Method to use to determinate the sell\', CHANGE sellpostingvalue sellValue NUMERIC(10, 2) NOT NULL COMMENT \'Sell value\'');
    }

    /**
     * @param Schema $schema
     */
    public function down(Schema $schema)
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->abortIf($this->connection->getDatabasePlatform()->getName() != 'mysql', 'Migration can only be executed safely on \'mysql\'.');

        $this->addSql('ALTER TABLE servicePriceException CHANGE costmethod costPostingMethod VARCHAR(8) NOT NULL COLLATE utf8_unicode_ci COMMENT \'Method to use to determinate the cost\', CHANGE costvalue costPostingValue NUMERIC(10, 4) DEFAULT \'0.0000\' NOT NULL COMMENT \'Cost value\', CHANGE sellbasevalue sellPostingBaseValue VARCHAR(10) NOT NULL COLLATE utf8_unicode_ci COMMENT \'Determines the base value to calculate the sell price\', CHANGE sellmethod sellPostingMethod VARCHAR(8) NOT NULL COLLATE utf8_unicode_ci COMMENT \'Method to use to determinate the sell\', CHANGE sellvalue sellPostingValue NUMERIC(10, 2) NOT NULL COMMENT \'Sell value\'');
    }
}
