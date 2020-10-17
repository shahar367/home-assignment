using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DAL
{
    public class Dal
    {
        private Dal _instance;
        public Dal Instance
        {
            get
            {
                return _instance;
            }
            set
            {
                if(_instance == null)
                {
                    _instance = this;
                }
            }
        }

        public 
    }
}
