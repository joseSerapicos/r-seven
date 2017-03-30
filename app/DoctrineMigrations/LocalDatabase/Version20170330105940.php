<?php

namespace Application\DoctrineMigrations;

use Doctrine\DBAL\Migrations\AbstractMigration;
use Doctrine\DBAL\Schema\Schema;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
class Version20170330105940 extends AbstractMigration
{
    /**
     * @param Schema $schema
     */
    public function up(Schema $schema)
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->abortIf($this->connection->getDatabasePlatform()->getName() != 'mysql', 'Migration can only be executed safely on \'mysql\'.');

        $this->addSql('ALTER TABLE clientDocumentType CHANGE requiresadminrole requiresSysadminRole TINYINT(1) DEFAULT \'0\' NOT NULL COMMENT \'Determines if the menu access requires admin role\'');
        $this->addSql('ALTER TABLE entityDocumentType CHANGE requiresadminrole requiresSysadminRole TINYINT(1) DEFAULT \'0\' NOT NULL COMMENT \'Determines if the menu access requires admin role\'');
        $this->addSql('ALTER TABLE supplierDocumentType CHANGE requiresadminrole requiresSysadminRole TINYINT(1) DEFAULT \'0\' NOT NULL COMMENT \'Determines if the menu access requires admin role\'');
    }

    /**
     * @param Schema $schema
     */
    public function down(Schema $schema)
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->abortIf($this->connection->getDatabasePlatform()->getName() != 'mysql', 'Migration can only be executed safely on \'mysql\'.');

        $this->addSql('ALTER TABLE clientDocumentType CHANGE requiressysadminrole requiresAdminRole TINYINT(1) DEFAULT \'0\' NOT NULL COMMENT \'Determines if the menu access requires admin role\'');
        $this->addSql('ALTER TABLE entityDocumentType CHANGE requiressysadminrole requiresAdminRole TINYINT(1) DEFAULT \'0\' NOT NULL COMMENT \'Determines if the menu access requires admin role\'');
        $this->addSql('ALTER TABLE supplierDocumentType CHANGE requiressysadminrole requiresAdminRole TINYINT(1) DEFAULT \'0\' NOT NULL COMMENT \'Determines if the menu access requires admin role\'');
    }
}
