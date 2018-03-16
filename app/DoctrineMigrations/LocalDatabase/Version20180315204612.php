<?php

namespace Application\DoctrineMigrations;

use Doctrine\DBAL\Migrations\AbstractMigration;
use Doctrine\DBAL\Schema\Schema;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
class Version20180315204612 extends AbstractMigration
{
    /**
     * @param Schema $schema
     */
    public function up(Schema $schema)
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->abortIf($this->connection->getDatabasePlatform()->getName() !== 'mysql', 'Migration can only be executed safely on \'mysql\'.');

        $this->addSql('ALTER TABLE bookingServicePrice DROP FOREIGN KEY FK_F9787BE57152FE24');
        $this->addSql('ALTER TABLE bookingServicePrice ADD CONSTRAINT FK_F9787BE57152FE24 FOREIGN KEY (fk_grouperBookingServicePrice) REFERENCES bookingServicePrice (id) ON DELETE RESTRICT');
    }

    /**
     * @param Schema $schema
     */
    public function down(Schema $schema)
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->abortIf($this->connection->getDatabasePlatform()->getName() !== 'mysql', 'Migration can only be executed safely on \'mysql\'.');

        $this->addSql('ALTER TABLE bookingServicePrice DROP FOREIGN KEY FK_F9787BE57152FE24');
        $this->addSql('ALTER TABLE bookingServicePrice ADD CONSTRAINT FK_F9787BE57152FE24 FOREIGN KEY (fk_grouperBookingServicePrice) REFERENCES bookingServicePrice (id) ON DELETE CASCADE');
    }
}
