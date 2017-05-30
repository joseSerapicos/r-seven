<?php

namespace Application\DoctrineMigrations;

use Doctrine\DBAL\Migrations\AbstractMigration;
use Doctrine\DBAL\Schema\Schema;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
class Version20170529234257 extends AbstractMigration
{
    /**
     * @param Schema $schema
     */
    public function up(Schema $schema)
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->abortIf($this->connection->getDatabasePlatform()->getName() != 'mysql', 'Migration can only be executed safely on \'mysql\'.');

        $this->addSql('ALTER TABLE clientCurrentAccountDetail CHANGE value value NUMERIC(10, 4) DEFAULT \'0\' NOT NULL COMMENT \'Value\', CHANGE vatValue vatValue NUMERIC(10, 4) DEFAULT \'0\' NOT NULL COMMENT \'VAT value\'');
    }

    /**
     * @param Schema $schema
     */
    public function down(Schema $schema)
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->abortIf($this->connection->getDatabasePlatform()->getName() != 'mysql', 'Migration can only be executed safely on \'mysql\'.');

        $this->addSql('ALTER TABLE clientCurrentAccountDetail CHANGE value value NUMERIC(10, 2) DEFAULT \'0.00\' NOT NULL COMMENT \'Value\', CHANGE vatValue vatValue NUMERIC(10, 2) DEFAULT \'0.00\' NOT NULL COMMENT \'VAT value\'');
    }
}
