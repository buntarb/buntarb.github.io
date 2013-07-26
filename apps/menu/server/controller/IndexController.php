<?php
    class IndexController extends \Phalcon\Mvc\Controller{
        public function indexAction(){
            try{
                $this->view->disable();

                $this->cookies->set('XSRF-TOKEN', 'XSRF-TOKEN', time()+15*86400, '', false, 'localhost', false);

                $mongoRsp = navbar::findFirst();

                $rspData['brand'] = $mongoRsp->brand;
                $rspData['apps'] = $mongoRsp->apps;
                $rspData['xsrf'] = array($this->request->getHeader('X-XSRF-TOKEN'));

                $rsp = new \Phalcon\Http\Response();
                $rsp->setContentType('application/json', 'UTF-8');
                $rsp->setContent(")]}',\n".json_encode($rspData));
                //$rsp->setJsonContent();
                $rsp->send();

            }catch(\Phalcon\Exception $e){
                echo $e->getMessage();
            }
        }
    }