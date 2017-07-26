<?php

namespace Application\DoctrineMigrations;

use Doctrine\DBAL\Migrations\AbstractMigration;
use Doctrine\DBAL\Schema\Schema;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
class Version20170627233129 extends AbstractMigration
{
    /**
     * @param Schema $schema
     */
    public function up(Schema $schema)
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->abortIf($this->connection->getDatabasePlatform()->getName() != 'mysql', 'Migration can only be executed safely on \'mysql\'.');

        $this->addSql('ALTER TABLE clientDocument ADD remainSettlement NUMERIC(10, 2) DEFAULT \'0\' NOT NULL COMMENT \'Remain settlement\'');
        $this->addSql('ALTER TABLE supplierDocument ADD remainSettlement NUMERIC(10, 2) DEFAULT \'0\' NOT NULL COMMENT \'Remain settlement\'');
        $this->addSql('ALTER TABLE entityDocument ADD remainSettlement NUMERIC(10, 2) DEFAULT \'0\' NOT NULL COMMENT \'Remain settlement\'');
    }

    /**
     * @param Schema $schema
     */
    public function down(Schema $schema)
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->abortIf($this->connection->getDatabasePlatform()->getName() != 'mysql', 'Migration can only be executed safely on \'mysql\'.');

        $this->addSql('ALTER TABLE clientDocument DROP remainSettlement');
        $this->addSql('ALTER TABLE entityDocument DROP remainSettlement');
        $this->addSql('ALTER TABLE supplierDocument DROP remainSettlement');
    }
}
