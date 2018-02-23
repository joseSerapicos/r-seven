<?php

namespace Application\DoctrineMigrations;

use Doctrine\DBAL\Migrations\AbstractMigration;
use Doctrine\DBAL\Schema\Schema;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
class Version20180125183927 extends AbstractMigration
{
    /**
     * @param Schema $schema
     */
    public function up(Schema $schema)
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->abortIf($this->connection->getDatabasePlatform()->getName() != 'mysql', 'Migration can only be executed safely on \'mysql\'.');

        $this->addSql('CREATE TABLE packageService (id INT UNSIGNED AUTO_INCREMENT NOT NULL COMMENT \'Column row identifier\', fk_service INT UNSIGNED NOT NULL COMMENT \'Column row identifier\', hasGroupingServices TINYINT(1) DEFAULT \'0\' COMMENT \'Enable and disable grouping of services on booking\', insertTime DATETIME NOT NULL COMMENT \'Date and time insertion\', insertUser VARCHAR(32) NOT NULL COMMENT \'User insertion\', isEnabled TINYINT(1) DEFAULT \'0\' NOT NULL COMMENT \'Determines whether the registry is enabled\', UNIQUE INDEX UNIQ_E9E83711BF396750 (id), UNIQUE INDEX UNIQ_E9E8371111B2A7FE (fk_service), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8 COLLATE utf8_unicode_ci ENGINE = InnoDB');
        $this->addSql('CREATE TABLE groupingService (id INT UNSIGNED AUTO_INCREMENT NOT NULL COMMENT \'Column row identifier\', fk_service INT UNSIGNED NOT NULL COMMENT \'Column row identifier\', insertTime DATETIME NOT NULL COMMENT \'Date and time insertion\', insertUser VARCHAR(32) NOT NULL COMMENT \'User insertion\', isEnabled TINYINT(1) DEFAULT \'0\' NOT NULL COMMENT \'Determines whether the registry is enabled\', UNIQUE INDEX UNIQ_BE943594BF396750 (id), UNIQUE INDEX UNIQ_BE94359411B2A7FE (fk_service), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8 COLLATE utf8_unicode_ci ENGINE = InnoDB');
        $this->addSql('CREATE TABLE regularService (id INT UNSIGNED AUTO_INCREMENT NOT NULL COMMENT \'Column row identifier\', fk_service INT UNSIGNED NOT NULL COMMENT \'Column row identifier\', fk_supplier INT UNSIGNED DEFAULT NULL COMMENT \'Column row identifier\', type VARCHAR(16) DEFAULT NULL COMMENT \'Type of service\', insertTime DATETIME NOT NULL COMMENT \'Date and time insertion\', insertUser VARCHAR(32) NOT NULL COMMENT \'User insertion\', isEnabled TINYINT(1) DEFAULT \'0\' NOT NULL COMMENT \'Determines whether the registry is enabled\', UNIQUE INDEX UNIQ_C7238790BF396750 (id), UNIQUE INDEX UNIQ_C723879011B2A7FE (fk_service), INDEX IDX_C7238790A9022FA0 (fk_supplier), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8 COLLATE utf8_unicode_ci ENGINE = InnoDB');
        $this->addSql('ALTER TABLE packageService ADD CONSTRAINT FK_E9E8371111B2A7FE FOREIGN KEY (fk_service) REFERENCES service (id) ON DELETE RESTRICT');
        $this->addSql('ALTER TABLE groupingService ADD CONSTRAINT FK_BE94359411B2A7FE FOREIGN KEY (fk_service) REFERENCES service (id) ON DELETE RESTRICT');
        $this->addSql('ALTER TABLE regularService ADD CONSTRAINT FK_C723879011B2A7FE FOREIGN KEY (fk_service) REFERENCES service (id) ON DELETE RESTRICT');
        $this->addSql('ALTER TABLE regularService ADD CONSTRAINT FK_C7238790A9022FA0 FOREIGN KEY (fk_supplier) REFERENCES supplier (id) ON DELETE SET NULL');
        $this->addSql('DROP TABLE basicService');
        $this->addSql('ALTER TABLE service DROP FOREIGN KEY FK_E19D9AD2A9022FA0');
        $this->addSql('DROP INDEX IDX_E19D9AD2A9022FA0 ON service');
        $this->addSql('ALTER TABLE service DROP fk_supplier, DROP type');
    }

    /**
     * @param Schema $schema
     */
    public function down(Schema $schema)
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->abortIf($this->connection->getDatabasePlatform()->getName() != 'mysql', 'Migration can only be executed safely on \'mysql\'.');

        $this->addSql('CREATE TABLE basicService (id INT UNSIGNED AUTO_INCREMENT NOT NULL COMMENT \'Column row identifier\', fk_service INT UNSIGNED NOT NULL COMMENT \'Column row identifier\', insertTime DATETIME NOT NULL COMMENT \'Date and time insertion\', insertUser VARCHAR(32) NOT NULL COLLATE utf8_unicode_ci COMMENT \'User insertion\', isEnabled TINYINT(1) DEFAULT \'0\' NOT NULL COMMENT \'Determines whether the registry is enabled\', UNIQUE INDEX UNIQ_2E70AF0CBF396750 (id), UNIQUE INDEX UNIQ_2E70AF0C11B2A7FE (fk_service), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8 COLLATE utf8_unicode_ci ENGINE = InnoDB');
        $this->addSql('ALTER TABLE basicService ADD CONSTRAINT FK_2E70AF0C11B2A7FE FOREIGN KEY (fk_service) REFERENCES service (id)');
        $this->addSql('DROP TABLE packageService');
        $this->addSql('DROP TABLE groupingService');
        $this->addSql('DROP TABLE regularService');
        $this->addSql('ALTER TABLE service ADD fk_supplier INT UNSIGNED DEFAULT NULL COMMENT \'Column row identifier\', ADD type VARCHAR(16) DEFAULT NULL COLLATE utf8_unicode_ci COMMENT \'Type of service\'');
        $this->addSql('ALTER TABLE service ADD CONSTRAINT FK_E19D9AD2A9022FA0 FOREIGN KEY (fk_supplier) REFERENCES supplier (id) ON DELETE SET NULL');
        $this->addSql('CREATE INDEX IDX_E19D9AD2A9022FA0 ON service (fk_supplier)');
    }
}
