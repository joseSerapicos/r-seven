<?php

namespace Application\DoctrineMigrations;

use Doctrine\DBAL\Migrations\AbstractMigration;
use Doctrine\DBAL\Schema\Schema;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
class Version20180126155735 extends AbstractMigration
{
    /**
     * @param Schema $schema
     */
    public function up(Schema $schema)
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->abortIf($this->connection->getDatabasePlatform()->getName() != 'mysql', 'Migration can only be executed safely on \'mysql\'.');

        $this->addSql('DROP INDEX idx_serviceAvailability_date ON serviceAvailability');
        $this->addSql('ALTER TABLE serviceAvailability ADD fk_targetService INT UNSIGNED DEFAULT NULL COMMENT \'Column row identifier\'');
        $this->addSql('ALTER TABLE serviceAvailability ADD CONSTRAINT FK_B5A1ED15BA53D6BF FOREIGN KEY (fk_targetService) REFERENCES service (id) ON DELETE CASCADE');
        $this->addSql('CREATE INDEX IDX_B5A1ED15BA53D6BF ON serviceAvailability (fk_targetService)');
        $this->addSql('CREATE INDEX idx_serviceAvailability_date ON serviceAvailability (startDate, endDate, fk_targetService)');
        $this->addSql('DROP INDEX idx_serviceBonus_date ON serviceBonus');
        $this->addSql('ALTER TABLE serviceBonus ADD fk_targetService INT UNSIGNED DEFAULT NULL COMMENT \'Column row identifier\'');
        $this->addSql('ALTER TABLE serviceBonus ADD CONSTRAINT FK_CD3F9489BA53D6BF FOREIGN KEY (fk_targetService) REFERENCES service (id) ON DELETE CASCADE');
        $this->addSql('CREATE INDEX IDX_CD3F9489BA53D6BF ON serviceBonus (fk_targetService)');
        $this->addSql('DROP INDEX idx_servicePrice_date ON servicePrice');
        $this->addSql('ALTER TABLE servicePrice ADD fk_targetService INT UNSIGNED DEFAULT NULL COMMENT \'Column row identifier\'');
        $this->addSql('ALTER TABLE servicePrice ADD CONSTRAINT FK_986FC92ABA53D6BF FOREIGN KEY (fk_targetService) REFERENCES service (id) ON DELETE CASCADE');
        $this->addSql('CREATE INDEX IDX_986FC92ABA53D6BF ON servicePrice (fk_targetService)');
        $this->addSql('CREATE INDEX idx_servicePrice_date ON servicePrice (startDate, endDate, fk_targetService)');
        $this->addSql('DROP INDEX idx_servicePriceException_date ON servicePriceException');
        $this->addSql('ALTER TABLE servicePriceException ADD fk_targetService INT UNSIGNED DEFAULT NULL COMMENT \'Column row identifier\'');
        $this->addSql('ALTER TABLE servicePriceException ADD CONSTRAINT FK_3C5F0CDBA53D6BF FOREIGN KEY (fk_targetService) REFERENCES service (id) ON DELETE CASCADE');
        $this->addSql('CREATE INDEX IDX_3C5F0CDBA53D6BF ON servicePriceException (fk_targetService)');
        $this->addSql('DROP INDEX idx_serviceAllot__dateAllotType ON serviceAllot');
        $this->addSql('ALTER TABLE serviceAllot ADD fk_targetService INT UNSIGNED DEFAULT NULL COMMENT \'Column row identifier\', DROP allotType');
        $this->addSql('ALTER TABLE serviceAllot ADD CONSTRAINT FK_B5E7FAA1BA53D6BF FOREIGN KEY (fk_targetService) REFERENCES service (id) ON DELETE CASCADE');
        $this->addSql('CREATE INDEX IDX_B5E7FAA1BA53D6BF ON serviceAllot (fk_targetService)');
        $this->addSql('CREATE INDEX idx_serviceAllot__allot ON serviceAllot (startDate, endDate, fk_targetService)');
        $this->addSql('ALTER TABLE serviceFixedCost ADD fk_targetService INT UNSIGNED DEFAULT NULL COMMENT \'Column row identifier\'');
        $this->addSql('ALTER TABLE serviceFixedCost ADD CONSTRAINT FK_21CFFE18BA53D6BF FOREIGN KEY (fk_targetService) REFERENCES service (id) ON DELETE CASCADE');
        $this->addSql('CREATE INDEX IDX_21CFFE18BA53D6BF ON serviceFixedCost (fk_targetService)');
    }

    /**
     * @param Schema $schema
     */
    public function down(Schema $schema)
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->abortIf($this->connection->getDatabasePlatform()->getName() != 'mysql', 'Migration can only be executed safely on \'mysql\'.');

        $this->addSql('ALTER TABLE serviceAllot DROP FOREIGN KEY FK_B5E7FAA1BA53D6BF');
        $this->addSql('DROP INDEX IDX_B5E7FAA1BA53D6BF ON serviceAllot');
        $this->addSql('DROP INDEX idx_serviceAllot__allot ON serviceAllot');
        $this->addSql('ALTER TABLE serviceAllot ADD allotType VARCHAR(16) NOT NULL COLLATE utf8_unicode_ci COMMENT \'Type of allot\', DROP fk_targetService');
        $this->addSql('CREATE INDEX idx_serviceAllot__dateAllotType ON serviceAllot (startDate, endDate, allotType)');
        $this->addSql('ALTER TABLE serviceAvailability DROP FOREIGN KEY FK_B5A1ED15BA53D6BF');
        $this->addSql('DROP INDEX IDX_B5A1ED15BA53D6BF ON serviceAvailability');
        $this->addSql('DROP INDEX idx_serviceAvailability_date ON serviceAvailability');
        $this->addSql('ALTER TABLE serviceAvailability DROP fk_targetService');
        $this->addSql('CREATE INDEX idx_serviceAvailability_date ON serviceAvailability (startDate, endDate)');
        $this->addSql('ALTER TABLE serviceBonus DROP FOREIGN KEY FK_CD3F9489BA53D6BF');
        $this->addSql('DROP INDEX IDX_CD3F9489BA53D6BF ON serviceBonus');
        $this->addSql('ALTER TABLE serviceBonus DROP fk_targetService');
        $this->addSql('CREATE INDEX idx_serviceBonus_date ON serviceBonus (startDate, endDate)');
        $this->addSql('ALTER TABLE serviceFixedCost DROP FOREIGN KEY FK_21CFFE18BA53D6BF');
        $this->addSql('DROP INDEX IDX_21CFFE18BA53D6BF ON serviceFixedCost');
        $this->addSql('ALTER TABLE serviceFixedCost DROP fk_targetService');
        $this->addSql('ALTER TABLE servicePrice DROP FOREIGN KEY FK_986FC92ABA53D6BF');
        $this->addSql('DROP INDEX IDX_986FC92ABA53D6BF ON servicePrice');
        $this->addSql('DROP INDEX idx_servicePrice_date ON servicePrice');
        $this->addSql('ALTER TABLE servicePrice DROP fk_targetService');
        $this->addSql('CREATE INDEX idx_servicePrice_date ON servicePrice (startDate, endDate)');
        $this->addSql('ALTER TABLE servicePriceException DROP FOREIGN KEY FK_3C5F0CDBA53D6BF');
        $this->addSql('DROP INDEX IDX_3C5F0CDBA53D6BF ON servicePriceException');
        $this->addSql('ALTER TABLE servicePriceException DROP fk_targetService');
        $this->addSql('CREATE INDEX idx_servicePriceException_date ON servicePriceException (startDate, endDate)');
    }
}
