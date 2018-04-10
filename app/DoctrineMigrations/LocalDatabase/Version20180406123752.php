<?php

namespace Application\DoctrineMigrations;

use Doctrine\DBAL\Migrations\AbstractMigration;
use Doctrine\DBAL\Schema\Schema;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
class Version20180406123752 extends AbstractMigration
{
    /**
     * @param Schema $schema
     */
    public function up(Schema $schema)
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->abortIf($this->connection->getDatabasePlatform()->getName() !== 'mysql', 'Migration can only be executed safely on \'mysql\'.');

        $this->addSql('CREATE TABLE emailTemplate (id INT UNSIGNED AUTO_INCREMENT NOT NULL COMMENT \'Column row identifier\', name VARCHAR(32) NOT NULL COMMENT \'Name\', text VARCHAR(512) NOT NULL COMMENT \'Text of email\', insertTime DATETIME NOT NULL COMMENT \'Date and time insertion\', insertUser VARCHAR(32) NOT NULL COMMENT \'User insertion\', isEnabled TINYINT(1) DEFAULT \'0\' NOT NULL COMMENT \'Determines whether the registry is enabled\', UNIQUE INDEX UNIQ_A79EF4675E237E06 (name), UNIQUE INDEX UNIQ_A79EF467BF396750 (id), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8 COLLATE utf8_unicode_ci ENGINE = InnoDB');
        $this->addSql('CREATE TABLE emailTemplateDefault (id INT UNSIGNED AUTO_INCREMENT NOT NULL COMMENT \'Column row identifier\', action VARCHAR(16) NOT NULL COMMENT \'Action to apply template\', insertTime DATETIME NOT NULL COMMENT \'Date and time insertion\', insertUser VARCHAR(32) NOT NULL COMMENT \'User insertion\', isEnabled TINYINT(1) DEFAULT \'0\' NOT NULL COMMENT \'Determines whether the registry is enabled\', fk_emailTemplate INT UNSIGNED NOT NULL COMMENT \'Column row identifier\', UNIQUE INDEX UNIQ_527BA8EA47CC8C92 (action), UNIQUE INDEX UNIQ_527BA8EABF396750 (id), INDEX IDX_527BA8EAC3D481A5 (fk_emailTemplate), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8 COLLATE utf8_unicode_ci ENGINE = InnoDB');
        $this->addSql('ALTER TABLE emailTemplateDefault ADD CONSTRAINT FK_527BA8EAC3D481A5 FOREIGN KEY (fk_emailTemplate) REFERENCES emailTemplate (id) ON DELETE CASCADE');
    }

    /**
     * @param Schema $schema
     */
    public function down(Schema $schema)
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->abortIf($this->connection->getDatabasePlatform()->getName() !== 'mysql', 'Migration can only be executed safely on \'mysql\'.');

        $this->addSql('ALTER TABLE emailTemplateDefault DROP FOREIGN KEY FK_527BA8EAC3D481A5');
        $this->addSql('DROP TABLE emailTemplate');
        $this->addSql('DROP TABLE emailTemplateDefault');
    }
}
