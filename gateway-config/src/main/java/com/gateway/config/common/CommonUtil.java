package com.gateway.config.common;

import com.alibaba.fastjson.JSON;

import java.io.*;
import java.math.BigDecimal;
import java.text.SimpleDateFormat;
import java.util.*;

/**
 * Created by IntelliJ IDEA.
 * User: zhaojun
 * Date: 14-4-2
 * Time: 下午5:47
 */
public class CommonUtil {

    /**
     * object isEmpty
     *
     * @param obj object
     * @return null:true  not null: false
     */
    public static boolean isEmpty(Object obj) {
        boolean result = true;
        if (obj != null) {
            if (obj instanceof Collection) {
                result = ((Collection) obj).isEmpty();
            } else if (obj instanceof Map) {
                result = ((Map) obj).isEmpty();
            } else if (obj instanceof String) {
                result = "".equals(obj);
            }

            else {
                result = false;
            }
        }
        return result;
    }

    /**
     * objectToJson
     *
     * @param o Object
     * @return JSONString
     */
    public static String objectToJson(Object o) {
        return JSON.toJSONString(o);
    }

    /**
     * parseObject
     *
     * @param s   JSONString
     * @param z   Object    Class
     * @param <T> T
     * @return Object<T>
     */
    public static <T> T parseObject(String s, Class<T> z) {
        return JSON.parseObject(s, z);
    }



    public static <T> List  parseList(String s ,Class<T> z){
        return  JSON.parseArray(s,z);
    }


    /**
     * b1/b2
     *
     * @param b1  b1
     * @param b2  b2
     * @param num 保留小树位数
     * @return double
     */
    public static double divide(double b1, double b2, int num) {
        if (b2 == 0) return 0;
        BigDecimal a = new BigDecimal(b1);
        BigDecimal b = new BigDecimal(b2);
        return a.divide(b, num, BigDecimal.ROUND_HALF_UP).doubleValue();
    }

    /**
     * b1/b2
     *
     * @param b1  b1
     * @param b2  b2
     * @param num 保留小树位数
     * @return double a = b1/b2
     */
    public static double divide(long b1, double b2, int num) {
        if (b2 == 0) return 0;
        BigDecimal a = new BigDecimal(b1);
        BigDecimal b = new BigDecimal(b2);
        return a.divide(b, num, BigDecimal.ROUND_HALF_UP).doubleValue();
    }

    /**
     * removeValueFromIntegerList
     *
     * @param list    List<Integer> list
     * @param reValue remove value
     */
    public static void removeValueFromIntegerList(List<Integer> list, Integer reValue) {
        if (list.isEmpty() || reValue == null) return;
        Iterator<Integer> sListIterator = list.iterator();
        while (sListIterator.hasNext()) {
            Integer e = sListIterator.next();
            if (e.intValue() == reValue.intValue()) {
                sListIterator.remove();
            }
        }
    }

    /**
     * list 深度复制
     *
     * @param src List<T>
     * @return List<T>
     * @throws IOException
     * @throws ClassNotFoundException
     */
    public static <T> List<T> deepCopy(List<T> src) {
        try {
            ByteArrayOutputStream byteOut = new ByteArrayOutputStream();
            ObjectOutputStream out = new ObjectOutputStream(byteOut);
            out.writeObject(src);

            ByteArrayInputStream byteIn = new ByteArrayInputStream(byteOut.toByteArray());
            ObjectInputStream in = new ObjectInputStream(byteIn);
            return (List<T>) in.readObject();
        } catch (Exception e) {
            e.printStackTrace();
        }
        return null;
    }

    /**
     * string2bytes
     *
     * @param str         String
     * @param charsetName 字符编码
     * @return byte[]
     */
    public static byte[] string2bytes(String str, String charsetName) {
        if (charsetName != null) {
            try {
                return str.getBytes(charsetName);
            } catch (UnsupportedEncodingException e) {
                e.printStackTrace();
            }

        }
        return str.getBytes();
    }

    /**
     * string2bytes
     *
     * @param str String
     * @return byte[]
     */
    public static byte[] string2bytes(String str) {
        return str.getBytes();
    }

    /**
     * byte2string
     *
     * @param b           byte[]
     * @param charsetName 字符编码
     * @return String
     */
    public static String byte2string(byte[] b, String charsetName) {
        try {
            return new String(b, charsetName);
        } catch (UnsupportedEncodingException e) {
            e.printStackTrace();
        }
        return null;
    }

    /**
     * byte2string
     *
     * @param b byte[]
     * @return String
     */
    public static String byte2string(byte[] b) {
        return new String(b);
    }

    public static boolean isNullString(String s) {
        return s == null || "".equals(s.trim());
    }

    /**
     * ms 转换十分秒
     *
     * @param mss 毫秒数
     * @return 十分秒
     */
    public static String formatDuring(long mss) {
        long h = mss / (60 * 60 * 1000);
        long h_c = mss % (60 * 60 * 1000);
        long s = 0;
        long m = 0;
        long ms = 0;
        if (h_c != 0) {
            //计算分钟数
            m = h_c / (60 * 1000);
            long m_c = h_c % (60 * 1000);
            if (m_c != 0) {
                //求秒数
                s = m_c / 1000;
                ms = m_c % 1000;   //毫秒数
            }
        }
        StringBuilder r = new StringBuilder();
        if (h != 0) {
            r.append(h).append("h ");
        }
        if (m != 0) {
            r.append(m).append("m ");
        }
        if (s != 0) {
            r.append(s).append("s ");
        }
        if (ms != 0) {
            r.append(ms).append("ms ");
        }
        return r.toString();
    }

    /**
     * @param ms  毫秒数
     * @param num 保留小数点后多少位
     * @return double
     */
    public static double ms2scond(double ms, int num) {
        return divide(ms, 1000, 3);
    }

    /**
     * @param ms  毫秒数
     * @param num 保留小数点后多少位
     * @return double
     */
    public static double ms2scond(long ms, int num) {
        return divide(ms, 1000, 3);
    }

    /**
     * 排序list
     *
     * @param list 排序list
     */
    public static void sortIntegerList(List<Integer> list) {
        if (list != null && !list.isEmpty()) {
            Collections.sort(list, new Comparator() {
                public int compare(Object o1, Object o2) {
                    Integer a1 = (Integer) o1;
                    Integer a2 = (Integer) o2;
                    return a1.compareTo(a2);
                }
            });
        }
    }

    /**
     * Double2Integer
     *
     * @param srcNumber 被转转换double
     * @return Integer
     */
    public static Integer Double2Integer(Double srcNumber) {
        Integer index = Integer.parseInt(new java.text.DecimalFormat("0").format(srcNumber));
        return index;
    }


     public  static byte[] subBytes(byte[] src, int begin, int count) {
        byte[] bs = new byte[count];
        for (int i=begin; i<begin+count; i++) bs[i-begin] = src[i];
        return bs;
    }


    /**
     *
     * @param format yyyy-MM-dd
     * @return
     */
    public static String getYestoday(String format){
        Calendar   cal   =   Calendar.getInstance();
        cal.add(Calendar.DATE,   -1);
        String yesterday = new SimpleDateFormat(format).format(cal.getTime());
        return yesterday;
    }

}
