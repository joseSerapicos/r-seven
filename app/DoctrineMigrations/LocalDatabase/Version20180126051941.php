<?php

namespace Application\DoctrineMigrations;

use Doctrine\DBAL\Migrations\AbstractMigration;
use Doctrine\DBAL\Schema\Schema;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
class Version20180126051941 extends AbstractMigration
{
    /**
     * @param Schema $schema
     */
    public function up(Schema $schema)
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->abortIf($this->connection->getDatabasePlatform()->getName() != 'mysql', 'Migration can only be executed safely on \'mysql\'.');

        $this->addSql('CREATE TABLE packageServiceServices (id INT UNSIGNED AUTO_INCREMENT NOT NULL COMMENT \'Column row identifier\', fk_service INT UNSIGNED NOT NULL COMMENT \'Column row identifier\', description VARCHAR(256) DEFAULT NULL COMMENT \'Description for module\', priority SMALLINT UNSIGNED DEFAULT 0 NOT NULL COMMENT \'Priority for menu. Determines the order in the modules list\', availability VARCHAR(8) DEFAULT NULL COMMENT \'Availability control\', price VARCHAR(8) DEFAULT NULL COMMENT \'Price control\', allot VARCHAR(8) DEFAULT NULL COMMENT \'Allot control\', insertTime DATETIME NOT NULL COMMENT \'Date and time insertion\', insertUser VARCHAR(32) NOT NULL COMMENT \'User insertion\', isEnabled TINYINT(1) DEFAULT \'0\' NOT NULL COMMENT \'Determines whether the registry is enabled\', fk_packageService INT UNSIGNED NOT NULL COMMENT \'Column row identifier\', UNIQUE INDEX UNIQ_88421517BF396750 (id), INDEX IDX_884215179CE6DEF8 (fk_packageService), INDEX IDX_8842151711B2A7FE (fk_service), UNIQUE INDEX unq_packageServiceServices_service (fk_packageService, fk_service), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8 COLLATE utf8_unicode_ci ENGINE = InnoDB');
        $this->addSql('ALTER TABLE packageServiceServices ADD CONSTRAINT FK_884215179CE6DEF8 FOREIGN KEY (fk_packageService) REFERENCES packageService (id) ON DELETE CASCADE');
        $this->addSql('ALTER TABLE packageServiceServices ADD CONSTRAINT FK_8842151711B2A7FE FOREIGN KEY (fk_service) REFERENCES service (id) ON DELETE RESTRICT');
    }

    /**
     * @param Schema $schema
     */
    public function down(Schema $schema)
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->abortIf($this->connection->getDatabasePlatform()->getName() != 'mysql', 'Migration can only be executed safely on \'mysql\'.');

        $this->addSql('DROP TABLE packageServiceServices');
    }
}
