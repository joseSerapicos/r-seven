<?php

namespace Application\DoctrineMigrations;

use Doctrine\DBAL\Migrations\AbstractMigration;
use Doctrine\DBAL\Schema\Schema;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
class Version20170224152145 extends AbstractMigration
{
    /**
     * @param Schema $schema
     */
    public function up(Schema $schema)
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->abortIf($this->connection->getDatabasePlatform()->getName() != 'mysql', 'Migration can only be executed safely on \'mysql\'.');

        $this->addSql('ALTER TABLE servicePriceException ADD marginBaseValue VARCHAR(10) NOT NULL COMMENT \'Determines the base value to apply the margin\', ADD marginMethod VARCHAR(8) NOT NULL COMMENT \'Margin method to use to determinate the sell\', ADD marginValue NUMERIC(10, 4) NOT NULL COMMENT \'Margin value\', DROP sellBaseValue, DROP sellMethod, DROP sellValue');
    }

    /**
     * @param Schema $schema
     */
    public function down(Schema $schema)
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->abortIf($this->connection->getDatabasePlatform()->getName() != 'mysql', 'Migration can only be executed safely on \'mysql\'.');

        $this->addSql('ALTER TABLE servicePriceException ADD sellBaseValue VARCHAR(10) NOT NULL COLLATE utf8_unicode_ci COMMENT \'Determines the base value to calculate the sell price\', ADD sellMethod VARCHAR(8) NOT NULL COLLATE utf8_unicode_ci COMMENT \'Method to use to determinate the sell\', ADD sellValue NUMERIC(10, 2) NOT NULL COMMENT \'Sell value\', DROP marginBaseValue, DROP marginMethod, DROP marginValue');
    }
}
