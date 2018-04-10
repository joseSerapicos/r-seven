<?php

namespace Application\DoctrineMigrations;

use Doctrine\DBAL\Migrations\AbstractMigration;
use Doctrine\DBAL\Schema\Schema;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
class Version20180126163938 extends AbstractMigration
{
    /**
     * @param Schema $schema
     */
    public function up(Schema $schema)
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->abortIf($this->connection->getDatabasePlatform()->getName() != 'mysql', 'Migration can only be executed safely on \'mysql\'.');

        $this->addSql('CREATE INDEX idx_serviceBonus__date ON serviceBonus (startDate, endDate, fk_targetService)');
        $this->addSql('CREATE INDEX idx_servicePriceException__date ON servicePriceException (startDate, endDate, fk_targetService)');
        $this->addSql('ALTER TABLE serviceAllot DROP FOREIGN KEY FK_B5E7FAA1BA53D6BF');
        $this->addSql('DROP INDEX idx_serviceallot__allot ON serviceAllot');
        $this->addSql('CREATE INDEX idx_serviceAllot__date ON serviceAllot (startDate, endDate, fk_targetService)');
        $this->addSql('ALTER TABLE serviceAllot ADD CONSTRAINT FK_B5E7FAA1BA53D6BF FOREIGN KEY (fk_targetService) REFERENCES service (id) ON DELETE CASCADE');
        $this->addSql('CREATE INDEX idx_serviceFixedCost__date ON serviceFixedCost (startDate, endDate, fk_targetService)');
    }

    /**
     * @param Schema $schema
     */
    public function down(Schema $schema)
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->abortIf($this->connection->getDatabasePlatform()->getName() != 'mysql', 'Migration can only be executed safely on \'mysql\'.');

        $this->addSql('ALTER TABLE serviceAllot DROP FOREIGN KEY FK_B5E7FAA1BA53D6BF');
        $this->addSql('DROP INDEX idx_serviceallot__date ON serviceAllot');
        $this->addSql('CREATE INDEX idx_serviceAllot__allot ON serviceAllot (startDate, endDate, fk_targetService)');
        $this->addSql('ALTER TABLE serviceAllot ADD CONSTRAINT FK_B5E7FAA1BA53D6BF FOREIGN KEY (fk_targetService) REFERENCES service (id) ON DELETE CASCADE');
        $this->addSql('DROP INDEX idx_serviceBonus__date ON serviceBonus');
        $this->addSql('DROP INDEX idx_serviceFixedCost__date ON serviceFixedCost');
        $this->addSql('DROP INDEX idx_servicePriceException__date ON servicePriceException');
    }
}
