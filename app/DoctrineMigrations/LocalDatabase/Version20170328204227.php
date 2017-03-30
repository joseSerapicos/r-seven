<?php

namespace Application\DoctrineMigrations;

use Doctrine\DBAL\Migrations\AbstractMigration;
use Doctrine\DBAL\Schema\Schema;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
class Version20170328204227 extends AbstractMigration
{
    /**
     * @param Schema $schema
     */
    public function up(Schema $schema)
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->abortIf($this->connection->getDatabasePlatform()->getName() != 'mysql', 'Migration can only be executed safely on \'mysql\'.');

        $this->addSql('ALTER TABLE clientDocumentType ADD acl SMALLINT UNSIGNED DEFAULT NULL COMMENT \'Access control lists\', ADD requiresAdminRole TINYINT(1) DEFAULT \'0\' NOT NULL COMMENT \'Determines if the menu access requires admin role\'');
        $this->addSql('ALTER TABLE supplierDocumentType ADD acl SMALLINT UNSIGNED DEFAULT NULL COMMENT \'Access control lists\', ADD requiresAdminRole TINYINT(1) DEFAULT \'0\' NOT NULL COMMENT \'Determines if the menu access requires admin role\'');
        $this->addSql('ALTER TABLE entityDocumentType ADD acl SMALLINT UNSIGNED DEFAULT NULL COMMENT \'Access control lists\', ADD requiresAdminRole TINYINT(1) DEFAULT \'0\' NOT NULL COMMENT \'Determines if the menu access requires admin role\'');
    }

    /**
     * @param Schema $schema
     */
    public function down(Schema $schema)
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->abortIf($this->connection->getDatabasePlatform()->getName() != 'mysql', 'Migration can only be executed safely on \'mysql\'.');

        $this->addSql('ALTER TABLE clientDocumentType DROP acl, DROP requiresAdminRole');
        $this->addSql('ALTER TABLE entityDocumentType DROP acl, DROP requiresAdminRole');
        $this->addSql('ALTER TABLE supplierDocumentType DROP acl, DROP requiresAdminRole');
    }
}
