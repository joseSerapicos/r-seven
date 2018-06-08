<?php

namespace Application\DoctrineMigrations;

use Doctrine\DBAL\Migrations\AbstractMigration;
use Doctrine\DBAL\Schema\Schema;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
class Version20180524075918 extends AbstractMigration
{
    /**
     * @param Schema $schema
     */
    public function up(Schema $schema)
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->abortIf($this->connection->getDatabasePlatform()->getName() !== 'mysql', 'Migration can only be executed safely on \'mysql\'.');

        $this->addSql('CREATE TABLE supplierDocumentReceiptPayment (id INT UNSIGNED AUTO_INCREMENT NOT NULL COMMENT \'Column row identifier\', reference VARCHAR(32) DEFAULT NULL COMMENT \'Reference\', description VARCHAR(256) DEFAULT NULL COMMENT \'Description\', value NUMERIC(10, 2) DEFAULT \'0\' NOT NULL COMMENT \'Value\', insertTime DATETIME NOT NULL COMMENT \'Date and time insertion\', insertUser VARCHAR(64) NOT NULL COMMENT \'User insertion\', isEnabled TINYINT(1) DEFAULT \'0\' NOT NULL COMMENT \'Determines whether the registry is enabled\', fk_supplierDocument INT UNSIGNED NOT NULL COMMENT \'Column row identifier\', fk_paymentMethod INT UNSIGNED NOT NULL COMMENT \'Column row identifier\', UNIQUE INDEX UNIQ_AA6496D6BF396750 (id), INDEX IDX_AA6496D682581A35 (fk_supplierDocument), INDEX IDX_AA6496D6E0CE90BA (fk_paymentMethod), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8 COLLATE utf8_unicode_ci ENGINE = InnoDB');
        $this->addSql('CREATE TABLE clientDocumentReceiptPayment (id INT UNSIGNED AUTO_INCREMENT NOT NULL COMMENT \'Column row identifier\', reference VARCHAR(32) DEFAULT NULL COMMENT \'Reference\', description VARCHAR(256) DEFAULT NULL COMMENT \'Description\', value NUMERIC(10, 2) DEFAULT \'0\' NOT NULL COMMENT \'Value\', insertTime DATETIME NOT NULL COMMENT \'Date and time insertion\', insertUser VARCHAR(64) NOT NULL COMMENT \'User insertion\', isEnabled TINYINT(1) DEFAULT \'0\' NOT NULL COMMENT \'Determines whether the registry is enabled\', fk_clientDocument INT UNSIGNED NOT NULL COMMENT \'Column row identifier\', fk_clientPaymentRequest INT UNSIGNED DEFAULT NULL COMMENT \'Column row identifier\', fk_paymentMethod INT UNSIGNED NOT NULL COMMENT \'Column row identifier\', UNIQUE INDEX UNIQ_6C649235BF396750 (id), INDEX IDX_6C6492357264A4C9 (fk_clientDocument), INDEX IDX_6C6492359BC9FAB8 (fk_clientPaymentRequest), INDEX IDX_6C649235E0CE90BA (fk_paymentMethod), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8 COLLATE utf8_unicode_ci ENGINE = InnoDB');
        $this->addSql('ALTER TABLE supplierDocumentReceiptPayment ADD CONSTRAINT FK_AA6496D682581A35 FOREIGN KEY (fk_supplierDocument) REFERENCES supplierDocument (id) ON DELETE RESTRICT');
        $this->addSql('ALTER TABLE supplierDocumentReceiptPayment ADD CONSTRAINT FK_AA6496D6E0CE90BA FOREIGN KEY (fk_paymentMethod) REFERENCES paymentMethod (id) ON DELETE RESTRICT');
        $this->addSql('ALTER TABLE clientDocumentReceiptPayment ADD CONSTRAINT FK_6C6492357264A4C9 FOREIGN KEY (fk_clientDocument) REFERENCES clientDocument (id) ON DELETE RESTRICT');
        $this->addSql('ALTER TABLE clientDocumentReceiptPayment ADD CONSTRAINT FK_6C6492359BC9FAB8 FOREIGN KEY (fk_clientPaymentRequest) REFERENCES clientPaymentRequest (id) ON DELETE RESTRICT');
        $this->addSql('ALTER TABLE clientDocumentReceiptPayment ADD CONSTRAINT FK_6C649235E0CE90BA FOREIGN KEY (fk_paymentMethod) REFERENCES paymentMethod (id) ON DELETE RESTRICT');
    }

    /**
     * @param Schema $schema
     */
    public function down(Schema $schema)
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->abortIf($this->connection->getDatabasePlatform()->getName() !== 'mysql', 'Migration can only be executed safely on \'mysql\'.');

        $this->addSql('DROP TABLE supplierDocumentReceiptPayment');
        $this->addSql('DROP TABLE clientDocumentReceiptPayment');
    }
}
