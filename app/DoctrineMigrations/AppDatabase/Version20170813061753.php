<?php

namespace Application\DoctrineMigrations;

use Doctrine\DBAL\Migrations\AbstractMigration;
use Doctrine\DBAL\Schema\Schema;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
class Version20170813061753 extends AbstractMigration
{
    /**
     * @param Schema $schema
     */
    public function up(Schema $schema)
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->abortIf($this->connection->getDatabasePlatform()->getName() != 'mysql', 'Migration can only be executed safely on \'mysql\'.');

        $this->addSql('ALTER TABLE app_module ADD fkApp_module INT UNSIGNED DEFAULT NULL COMMENT \'Column row identifier\', CHANGE priority priority SMALLINT UNSIGNED DEFAULT 0 NOT NULL COMMENT \'Priority for menu. Determines the order in the modules list\'');
        $this->addSql('ALTER TABLE app_module ADD CONSTRAINT FK_B1589AB78ABF3EF5 FOREIGN KEY (fkApp_module) REFERENCES wo_app.app_module (id) ON DELETE CASCADE');
        $this->addSql('CREATE INDEX IDX_B1589AB78ABF3EF5 ON app_module (fkApp_module)');
        $this->addSql('ALTER TABLE app_moduleMenu CHANGE priority priority SMALLINT UNSIGNED DEFAULT 0 NOT NULL COMMENT \'Priority for menu. Determines the order in the menus list\'');
    }

    /**
     * @param Schema $schema
     */
    public function down(Schema $schema)
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->abortIf($this->connection->getDatabasePlatform()->getName() != 'mysql', 'Migration can only be executed safely on \'mysql\'.');

        $this->addSql('ALTER TABLE wo_app.app_module DROP FOREIGN KEY FK_B1589AB78ABF3EF5');
        $this->addSql('DROP INDEX IDX_B1589AB78ABF3EF5 ON wo_app.app_module');
        $this->addSql('ALTER TABLE wo_app.app_module DROP fkApp_module, CHANGE priority priority SMALLINT UNSIGNED DEFAULT NULL COMMENT \'Priority for menu. Determines the order in the modules list\'');
        $this->addSql('ALTER TABLE wo_app.app_moduleMenu CHANGE priority priority SMALLINT UNSIGNED DEFAULT NULL COMMENT \'Priority for menu. Determines the order in the menus list\'');
    }
}
