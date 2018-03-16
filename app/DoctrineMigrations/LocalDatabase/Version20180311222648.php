<?php

namespace Application\DoctrineMigrations;

use Doctrine\DBAL\Migrations\AbstractMigration;
use Doctrine\DBAL\Schema\Schema;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
class Version20180311222648 extends AbstractMigration
{
    /**
     * @param Schema $schema
     */
    public function up(Schema $schema)
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->abortIf($this->connection->getDatabasePlatform()->getName() != 'mysql', 'Migration can only be executed safely on \'mysql\'.');

        $this->addSql('CREATE TABLE storeLogoImage (id INT UNSIGNED AUTO_INCREMENT NOT NULL COMMENT \'Column row identifier\', fk_store INT UNSIGNED NOT NULL COMMENT \'Column row identifier\', name VARCHAR(128) NOT NULL COMMENT \'Name of file for user\', path VARCHAR(256) NOT NULL COMMENT \'File path\', extension VARCHAR(8) NOT NULL COMMENT \'Extension of file\', size INT UNSIGNED NOT NULL COMMENT \'Web file path\', insertTime DATETIME NOT NULL COMMENT \'Date and time insertion\', insertUser VARCHAR(32) NOT NULL COMMENT \'User insertion\', isEnabled TINYINT(1) DEFAULT \'0\' NOT NULL COMMENT \'Determines whether the registry is enabled\', UNIQUE INDEX UNIQ_B2BE7F92BF396750 (id), INDEX IDX_B2BE7F923EBA7B02 (fk_store), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8 COLLATE utf8_unicode_ci ENGINE = InnoDB');
        $this->addSql('ALTER TABLE storeLogoImage ADD CONSTRAINT FK_B2BE7F923EBA7B02 FOREIGN KEY (fk_store) REFERENCES store (id) ON DELETE CASCADE');
    }

    /**
     * @param Schema $schema
     */
    public function down(Schema $schema)
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->abortIf($this->connection->getDatabasePlatform()->getName() != 'mysql', 'Migration can only be executed safely on \'mysql\'.');

        $this->addSql('DROP TABLE storeLogoImage');
    }
}
