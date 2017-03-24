<?php

namespace Application\DoctrineMigrations;

use Doctrine\DBAL\Migrations\AbstractMigration;
use Doctrine\DBAL\Schema\Schema;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
class Version20170227173915 extends AbstractMigration
{
    /**
     * @param Schema $schema
     */
    public function up(Schema $schema)
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->abortIf($this->connection->getDatabasePlatform()->getName() != 'mysql', 'Migration can only be executed safely on \'mysql\'.');

        $this->addSql('ALTER TABLE servicePriceException ADD costBaseValue VARCHAR(10) DEFAULT NULL COMMENT \'Determines the base value to apply the cost\', CHANGE marginBaseValue marginBaseValue VARCHAR(10) DEFAULT NULL COMMENT \'Determines the base value to apply the margin\'');
    }

    /**
     * @param Schema $schema
     */
    public function down(Schema $schema)
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->abortIf($this->connection->getDatabasePlatform()->getName() != 'mysql', 'Migration can only be executed safely on \'mysql\'.');

        $this->addSql('ALTER TABLE servicePriceException DROP costBaseValue, CHANGE marginBaseValue marginBaseValue VARCHAR(10) NOT NULL COLLATE utf8_unicode_ci COMMENT \'Determines the base value to apply the margin\'');
    }
}
