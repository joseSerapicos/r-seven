<?php

namespace Application\DoctrineMigrations;

use Doctrine\DBAL\Migrations\AbstractMigration;
use Doctrine\DBAL\Schema\Schema;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
class Version20180127092947 extends AbstractMigration
{
    /**
     * @param Schema $schema
     */
    public function up(Schema $schema)
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->abortIf($this->connection->getDatabasePlatform()->getName() != 'mysql', 'Migration can only be executed safely on \'mysql\'.');

        $this->addSql('ALTER TABLE packageService ADD hasFixedDuration TINYINT(1) DEFAULT \'0\' COMMENT \'Enabled fixed duration for package\', ADD fixedDurationDays SMALLINT UNSIGNED DEFAULT 0 COMMENT \'Number of duration days for hasFixedDuration\', ADD priceFrom NUMERIC(10, 2) DEFAULT \'0\' COMMENT \'Cheapest price of package\', CHANGE hasGroupingServices hasGroupingServices TINYINT(1) DEFAULT \'0\' COMMENT \'Enable grouping of services on booking\'');
        $this->addSql('ALTER TABLE packageServiceService ADD durationStartDay SMALLINT UNSIGNED DEFAULT 0 NOT NULL COMMENT \'Start day of service\', ADD durationDays SMALLINT UNSIGNED DEFAULT 0 NOT NULL COMMENT \'Days of duration of service\'');
    }

    /**
     * @param Schema $schema
     */
    public function down(Schema $schema)
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->abortIf($this->connection->getDatabasePlatform()->getName() != 'mysql', 'Migration can only be executed safely on \'mysql\'.');

        $this->addSql('ALTER TABLE packageService DROP hasFixedDuration, DROP fixedDurationDays, DROP priceFrom, CHANGE hasGroupingServices hasGroupingServices TINYINT(1) DEFAULT \'0\' COMMENT \'Enable and disable grouping of services on booking\'');
        $this->addSql('ALTER TABLE packageServiceService DROP durationStartDay, DROP durationDays');
    }
}
