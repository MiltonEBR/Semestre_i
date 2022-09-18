sudo yum -y update; 
sudo yum -y install httpd; 
sudo firewall-cmd --permanent --add-port=80/tcp; 
sudo firewall-cmd --permanent --add-port=443/tcp; 
sudo firewall-cmd --reload; 
sudo rm -r /var/www/html/*;
sudo cp -r /tmp/vs-web/build/* /var/www/html/;
sudo systemctl stop httpd;
sudo systemctl start httpd;
sudo chown -R apache:apache /var/www;
