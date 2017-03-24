<?php

namespace Application\DoctrineMigrations;

use Doctrine\DBAL\Migrations\AbstractMigration;
use Doctrine\DBAL\Schema\Schema;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
class Version20170210201634 extends AbstractMigration
{
    /**
     * @param Schema $schema
     */
    public function up(Schema $schema)
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->abortIf($this->connection->getDatabasePlatform()->getName() != 'mysql', 'Migration can only be executed safely on \'mysql\'.');

        $this->addSql('ALTER TABLE place DROP FOREIGN KEY FK_741D53CDA35CF44A');
        $this->addSql('ALTER TABLE place CHANGE fk_country fk_country INT UNSIGNED NOT NULL COMMENT \'Column row identifier\'');
        $this->addSql('ALTER TABLE place ADD CONSTRAINT FK_741D53CDA35CF44A FOREIGN KEY (fk_country) REFERENCES country (id) ON DELETE CASCADE');
    }

    /**
     * @param Schema $schema
     */
    public function down(Schema $schema)
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->abortIf($this->connection->getDatabasePlatform()->getName() != 'mysql', 'Migration can only be executed safely on \'mysql\'.');

        $this->addSql('ALTER TABLE place DROP FOREIGN KEY FK_741D53CDA35CF44A');
        $this->addSql('ALTER TABLE place CHANGE fk_country fk_country INT UNSIGNED DEFAULT NULL COMMENT \'Column row identifier\'');
        $this->addSql('ALTER TABLE place ADD CONSTRAINT FK_741D53CDA35CF44A FOREIGN KEY (fk_country) REFERENCES country (id) ON DELETE SET NULL');
    }
}
