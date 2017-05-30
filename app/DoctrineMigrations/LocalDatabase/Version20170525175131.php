<?php

namespace Application\DoctrineMigrations;

use Doctrine\DBAL\Migrations\AbstractMigration;
use Doctrine\DBAL\Schema\Schema;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
class Version20170525175131 extends AbstractMigration
{
    /**
     * @param Schema $schema
     */
    public function up(Schema $schema)
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->abortIf($this->connection->getDatabasePlatform()->getName() != 'mysql', 'Migration can only be executed safely on \'mysql\'.');

        $this->addSql('ALTER TABLE serviceBookingServicePrice ADD CONSTRAINT FK_89E97B01DB62DD09 FOREIGN KEY (fk_vatCode) REFERENCES vatCode (id) ON DELETE RESTRICT');
        $this->addSql('CREATE INDEX IDX_89E97B01DB62DD09 ON serviceBookingServicePrice (fk_vatCode)');
    }

    /**
     * @param Schema $schema
     */
    public function down(Schema $schema)
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->abortIf($this->connection->getDatabasePlatform()->getName() != 'mysql', 'Migration can only be executed safely on \'mysql\'.');

        $this->addSql('ALTER TABLE serviceBookingServicePrice DROP FOREIGN KEY FK_89E97B01DB62DD09');
        $this->addSql('DROP INDEX IDX_89E97B01DB62DD09 ON serviceBookingServicePrice');
    }
}
